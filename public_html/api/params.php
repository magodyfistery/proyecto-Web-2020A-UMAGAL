<?php

$BASE_DIR = str_replace("public_html\api", "", dirname(__FILE__));  

require_once $BASE_DIR.'parameters.php';
require_once $BASE_DIR.'messages.php';
require_once $BASE_DIR.'business_models/response.php';
require_once $BASE_DIR.'business_models/log.php';
require_once $BASE_DIR.'business_models/database.php';
require_once $BASE_DIR.'public_html/api/utils.php';
