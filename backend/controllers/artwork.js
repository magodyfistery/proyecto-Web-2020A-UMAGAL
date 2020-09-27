'use strict'
var Project=require('../models/artwork');
var fs =require('fs');
var path=require('path');
const { exists } = require('../models/artwork');

var controller={
    home:function(req,res){
        return res.status(200).send({
            message:"Soy la home"
        });
    },
    test:function(req,res){
        return res.status(500).send({
            message:"Soy la pagina test"
        });
    },
    saveProject:function(req,res){
        var project=new Project();
        var params=req.body;
        project.name=params.name;
        project.description=params.description;
        project.username=params.username;
        project.year=params.year;
        project.id_artist=params.id_artist;
        project.image=null;

        project.save((err,projectStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'});
            if(!projectStored) return res.status(404).send({message:'No se ha podido guardar el proyecto'});
            return res.status(200).send({project:projectStored});
        });
        
    }, 
    getProject:function(req,res){
        var projectId=req.params.id;
        if(projectId==null) return res.status(404).send({message:'El proyecto no existe'});
        Project.findById(projectId,(err,project)=>{
            if(err) return res.status(500).send({message:'Error al devolver los datos'});
            if(!project) return res.status(404).send({message:'El proyecto no existe'});
            return res.status(200).send({project});
        });
    },
    getProjects:function(req,res){
        //ordenar por año de mayor a menor
        //condiciones para anio o más parametros
            //Project.find({year:2019}).exec((err,projects)=>{
            Project.find({}).sort('-2020').exec((err,projects)=>{
            if(err) return res.status(500).send({message:'Error al devolver los datos'});
            if(!projects) return res.status(404).send({message:'No hay proyectos para mostrar'});
            return res.status(200).send({projects});
        });
    },
    updateProject:function(req,res){
        var projectId=req.params.id;
        var update=req.body;
        Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdate)=>{
            if(err) return res.status(500).send({message:'Error al actualizar los datos'});
            if(!projectUpdate) return res.status(404).send({message:'No existe para actualizar'});
            return res.status(200).send({project:projectUpdate});
        });
    },
    deleteProject:function(req,res){
        var projectId=req.params.id;
        
        Project.findByIdAndRemove(projectId,(err,projectRemoved)=>{
            if(err) return res.status(500).send({message:'No se ha podido borrar el proyecto'});
            if(!projectRemoved) return res.status(404).send({message:'No se puede eliminar el proyecto'});
            return res.status(200).send({project:projectRemoved});
        });
    },
    uploadImage:function(req,res){
        var projecId=req.params.id;
        var fileName='Imagen no subida...';
        if(req.files){
            if (typeof req.files.image.path !== 'string') {
                res.sendStatus(400);
                return;
            }else{
                var fileName=req.files.image.path;
                console.log(fileName)                
                fileName = fileName.split('/')            
                Project.findByIdAndUpdate(projecId,{image:fileName[1]},{new:true},(err,projectUpdated)=>{
                    if(err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if(!projectUpdated) return res.status(404).send({message:'El proyecto no existe y  no se subio la imagen'});
                    return res.status(200).send({project:projectUpdated});
                });
                
            }
            
        }else{
            return res.status(200).send({message:fileName});
            console.log('here')
        }
    },
    getImageFile:function(req,res){
        var file=req.params.image;
        var path_file='./uploads/'+file;

        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message:'No existe la imagen...'
                });
            }
        });
    }
}

module.exports=controller;