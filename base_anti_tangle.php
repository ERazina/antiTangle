<!DOCTYPE html>
<? $clientScript = Yii::app()->clientScript; ?>
<? Yii::app()->retargetingHandler->onPage(); ?>
<html lang="ru" xmlns:og="http://ogp.me/ns#">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Новый пылесос Samsung с турбиной Anti-Tangle - мощность всасывания  в 2 раза дольше</title>
        <link rel="manifest" href="<?= $clientScript->host ?>/res/base/img/favicon/manifest.json" />
        <link rel="shortcut icon" type="image/x-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="<?= $clientScript->host ?>/res/base/img/favicon/favicon-16x16.png"   sizes="16x16" />
        <link rel="icon" type="image/png" href="<?= $clientScript->host ?>/res/base/img/favicon/favicon-32x32.png"   sizes="32x32" />
        <link rel="icon" type="image/png" href="<?= $clientScript->host ?>/res/base/img/favicon/favicon-96x96.png"   sizes="96x96" />
        <link rel="icon" type="image/png" href="<?= $clientScript->host ?>/res/base/img/favicon/favicon-192x192.png" sizes="192x192" />

        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-57x57.png"   sizes="57x57"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-60x60.png"   sizes="60x60"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-72x72.png"   sizes="72x72"   />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-76x76.png"   sizes="76x76"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-114x114.png" sizes="114x114"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-120x120.png" sizes="120x120"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-144x144.png" sizes="144x144"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-152x152.png" sizes="152x152"  />
        <link rel="apple-touch-icon" href="<?= $clientScript->host ?>/res/base/img/favicon/apple-touch-icon-180x180.png" sizes="180x180"  />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="<?= $clientScript->host ?>/res/base/img/favicon/mstile-144x144.png?v=NmYO8WoKWA" />
        <meta name="msapplication-config" content="<?= $clientScript->host ?>/res/base/img/favicon/browserconfig.xml" />

        <link href="/res/base/less/fonts.css" rel="stylesheet" />
        <? $clientScript->registerScriptFile("/res/base/js/google-tag-manager.js", ClientScript::POS_HEAD); ?>
        <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <!-- SAMSUNG -->

        <script type="text/javascript" src="/res/actions/antiTangle/common/next/js/samsung.min.js"></script>

        <!-- Global Styles -->
        <link rel="stylesheet" type="text/css" href="/res/actions/antiTangle/common/next/css/samsung.css">
        <!-- <link rel="stylesheet" type="text/css" href="/res/actions/antiTangle/ru/next/css/samsung.css"> -->
        
        <script type="text/javascript">
            var SITE_CD = 'ru';
            var DOMAIN = 'www.samsung.com';
            var OP_MODE = false;
            var USE_ESTORE = false;
            var USE_INSTORE = true;
            var INSTORE_MODE = false;
            var INSTORE_CODE = '';
            var BUSINESS_MODE = 'false';
            var MODULE_TYPE = 'B2C';
            var STORE_DOMAIN = 'store.samsung.com';

            var SYSTEM_MODE = 'real';

            var ESTORE_FAULT_MSG = 'Currently login and e-commerce funcionalities are unavailable due to system maintanence.';

            try {
                
                    document.domain = 'samsung.com';
                
            } catch(e) {}
        </script>

        <link rel="stylesheet" href="/res/actions/antiTangle/ru/common/next/local-rsrc/fonts/font.css">
        <link rel="stylesheet" href="/res/actions/antiTangle/ru/promotions/anti-tangle/css/style.css">
        <link rel="stylesheet" href="/res/actions/antiTangle/ru/promotions/anti-tangle/css/flickity.css">

        <script src="/res/actions/antiTangle/ru/promotions/anti-tangle/js/flickity.pkgd.min.js"></script>

    </head>
    <body class="ss_samsung">
        <? $this->widget('application.components.widgets.googleTagManager.googleTagManager'); ?>
        <div class="page-wrapper">
            <?= $content; ?>
        </div>
    </body>
</html>
<? Yii::app()->retargetingHandler->processPromoBlocks(); ?>
<? Yii::app()->retargetingHandler->processItemBlocks(); ?>
<? Yii::app()->retargetingHandler->render(); ?>