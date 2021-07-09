<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<meta content="noindex, nofollow" name="robots" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>prefork - Servidor HTTP Apache</title>
<link href="../style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="../style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="../style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" />
<link href="../images/favicon.ico" rel="shortcut icon" /><link href="http://httpd.apache.org/docs/current/mod/prefork.html" rel="canonical" /></head>
<body>
<div id="page-header">
<p class="menu"><a href="../mod/">M&#243;dulos</a> | <a href="../mod/directives.html">Directivas</a> | <a href="../faq/">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa de este sitio web</a></p>
<p class="apache">Versi&#243;n 2.0 del Servidor HTTP Apache</p>
<img alt="" src="../images/feather.gif" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="../images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci&#243;n</a> &gt; <a href="../">Versi&#243;n 2.0</a> &gt; <a href="./">M&#243;dulos</a></div>
<div id="page-content">
<div class="retired"><h4>Please note</h4>
            <p>This document refers to the <strong>2.0</strong> version of Apache httpd, which <strong>is no longer maintained</strong>. Upgrade, and refer to the current version of httpd instead, documented at:</p>
        <ul><li><a href="http://httpd.apache.org/docs/current/">Current release version of Apache HTTP Server documentation</a></li></ul><p>You may follow <a href="http://httpd.apache.org/docs/current/mod/prefork.html">this link</a> to go to the current version of this document.</p></div><div id="preamble"><h1>MPM de Apache prefork</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="../de/mod/prefork.html" hreflang="de" rel="alternate" title="Deutsch">&nbsp;de&nbsp;</a> |
<a href="../en/mod/prefork.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/prefork.html" title="Espa&#241;ol">&nbsp;es&nbsp;</a> |
<a href="../ja/mod/prefork.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="../tr/mod/prefork.html" hreflang="tr" rel="alternate" title="T&#252;rk&#231;e">&nbsp;tr&nbsp;</a></p>
</div>
<div class="outofdate">Esta traducci&#243;n podr&#237;a estar
            obsoleta. Consulte la versi&#243;n en ingl&#233;s de la
            documentaci&#243;n para comprobar si se han producido cambios
            recientemente.</div>
<table class="module"><tr><th><a href="module-dict.html#Description">Descripci&#243;n:</a></th><td>Implementa un servidor web pre-forking y no
hebrado</td></tr>
<tr><th><a href="module-dict.html#Status">Estado:</a></th><td>MPM</td></tr>
<tr><th><a href="module-dict.html#ModuleIdentifier">Identificador de M&#243;dulos:</a></th><td>mpm_prefork_module</td></tr>
<tr><th><a href="module-dict.html#SourceFile">Fichero de C&#243;digo Fuente:</a></th><td>prefork.c</td></tr></table>
<h3>Resumen de contenidos</h3>

    <p>Este M&#243;dulo de MultiProcesamiento (MPM) implementa un
    servidor web pre-forking y no hebrado que trata las peticiones de
    una manera similar a como lo hac&#237;a Apache 1.3.  Esto es
    apropiado para sitios web que necesitan evitar el hebrado para ser
    compatibles con librer&#237;as que no son seguras cuado se usan
    hebras.  Es tambi&#233;n el mejor MPM para aislar cada
    petici&#243;n, de manera que si suge un problema con una
    petici&#243;n, esto no afecte al resto.</p>

    <p>Este MPM est&#225; muy autorregulado, de manera que muy pocas
    veces es necesario ajustar los valores de sus directivas de
    configuraci&#243;n. El valor que se fije en la directiva
    <code class="directive"><a href="../mod/mpm_common.html#maxclients">MaxClients</a></code> debe ser lo
    suficientemente grande para tratar tantas peticiones
    simult&#225;neas como espere recibir su sitio web, pero lo
    suficientemente peque&#241;o para asegurarse de que hay memoria
    RAM suficiente para todos los procesos.</p>
</div>
<div id="quickview"><h3 class="directives">Directivas</h3>
<ul id="toc">
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#acceptmutex">AcceptMutex</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#bs2000account">BS2000Account</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#coredumpdirectory">CoreDumpDirectory</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#enableexceptionhook">EnableExceptionHook</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#group">Group</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#listen">Listen</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#listenbacklog">ListenBacklog</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#lockfile">LockFile</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#maxclients">MaxClients</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#maxmemfree">MaxMemFree</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#maxrequestsperchild">MaxRequestsPerChild</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#maxspareservers">MaxSpareServers</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#minspareservers">MinSpareServers</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#pidfile">PidFile</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#receivebuffersize">ReceiveBufferSize</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#scoreboardfile">ScoreBoardFile</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#sendbuffersize">SendBufferSize</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#serverlimit">ServerLimit</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#startservers">StartServers</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#user">User</a></li>
</ul>
<h3>Temas</h3>
<ul id="topics">
<li><img alt="" src="../images/down.gif" /> <a href="#how-it-works">C&#243;mo funciona</a></li>
</ul><h3>Consulte tambi&#233;n</h3>
<ul class="seealso">
<li><a href="../bind.html">Especificar las direcciones y los puertos
que usa Apache</a></li>
</ul></div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="section">
<h2><a name="how-it-works" id="how-it-works">C&#243;mo funciona</a></h2> <p>Un
    solo proceso de control es el responsable de lanzar los procesos
    hijo que escuchan las peticiones que se puedan producir y las
    sirven cuando llegan. Apache siempre intenta mantener varios
    procesos <dfn>de sobra</dfn> o en espera, que est&#233;n
    disponibles para servir peticiones cuando lleguen. As&#237;, los
    clientes no tienen que esperar a que un nuevo proceso hijo sea
    creado para ser atendidos.</p>

    <p>Las directivas <code class="directive"><a href="../mod/mpm_common.html#startservers">StartServers</a></code>, <code class="directive"><a href="#minspareservers">MinSpareServers</a></code>, <code class="directive"><a href="#maxspareservers">MaxSpareServers</a></code>, y <code class="directive"><a href="../mod/mpm_common.html#maxclients">MaxClients</a></code> regulan la forma en que
    el proceso padre crea hijos para servir peticiones. En general,
    Apache funciona bien sin hacer muchas modificaciones en los
    valores por defecto de estas directivas, de manera que la mayor
    parte de los sitios web no necesitan ajustar esas directivas a
    valores diferentes. Los sitios web que necesiten servir m&#225;s
    de 256 peticiones simult&#225;neas pueden necesitar incrementar el
    valor de <code class="directive"><a href="../mod/mpm_common.html#maxclients">MaxClients</a></code>,
    mientras que los sitios web con memoria limitada pueden necesitar
    decrementar <code class="directive"><a href="../mod/mpm_common.html#maxclients">MaxClients</a></code>
    para evitar que el rendimiento del servidor se degrade (pasando
    los contenidos de memoria al disco y de vuelta a memoria). Puede
    obtener m&#225;s informaci&#243;n sobre como mejorar el
    rendimiento del proceso de creaci&#243;n de procesos en la
    documentaci&#243;n sobre <a href="../misc/perf-tuning.html">mejora
    del rendimiento</a>.</p>

    <p>El proceso padre de Apache se inicia normalmente como usuario
    <code>root</code> en Unix para que escuche en el puerto 80, sin
    embargo, los procesos hijo se crean con menores privilegios de
    usuario. Las directivas <code class="directive"><a href="../mod/mpm_common.html#user">User</a></code> y <code class="directive"><a href="../mod/mpm_common.html#group">Group</a></code> se usan para determinar los
    privilegios de los procesos hijo de Apache. Los procesos hijo
    deben ser capaces de leer todos los contenidos que van a servir,
    pero deben tener los menores privilegios posibles.</p>

    <p>La directiva <code class="directive"><a href="../mod/mpm_common.html#maxrequestsperchild">MaxRequestsPerChild</a></code> controla
    c&#243;mo el servidor recicla frecuentemente los procesos
    eliminando los antiguos y creando nuevos.</p>
</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="MaxSpareServers" id="MaxSpareServers">MaxSpareServers</a> <a name="maxspareservers" id="maxspareservers">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci&#243;n:</a></th><td>N&#250;mero m&#225;ximo de procesos hijo en espera que
puede tener el servdor</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>MaxSpareServers <var>number</var></code></td></tr>
<tr><th><a href="directive-dict.html#Default">Valor por defecto:</a></th><td><code>MaxSpareServers 10</code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>MPM</td></tr>
<tr><th><a href="directive-dict.html#Module">M&#243;dulo:</a></th><td>prefork</td></tr>
</table>
    <p>La directiva <code class="directive">MaxSpareServers</code> determina
    el n&#250;mero m&#225;ximo de procesos hijo <em>en espera</em>
    deseado. Un proceso en espera es aquel que no est&#225; atendiendo
    ninguna petici&#243;n. Si hay m&#225;s de
    <code class="directive">MaxSpareServers</code> procesos hijo en espera,
    entonces el proceso padre elimina el exceso.</p>

    <p>Ajustar este par&#225;metro debe ser necesario solo en sitios
    web con muchas visitas. Fijar un valor alto para este
    par&#225;metro es una mala idea casi siempre. Si fija un valor por
    debajo de <code class="directive"><a href="#minspareservers">MinSpareServers</a></code>,
    Apache ajustar&#225; autom&#225;ticamente el valor a <code class="directive">MinSpareServers</code><code> + 1</code>.</p>

<h3>Consulte tambi&#233;n</h3>
<ul>
<li><code class="directive"><a href="#minspareservers">MinSpareServers</a></code></li>
<li><code class="directive"><a href="../mod/mpm_common.html#startservers">StartServers</a></code></li>
</ul>
</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="MinSpareServers" id="MinSpareServers">MinSpareServers</a> <a name="minspareservers" id="minspareservers">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci&#243;n:</a></th><td>N&#250;mero m&#237;nimo de procesos hijo en espera</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>MinSpareServers <var>number</var></code></td></tr>
<tr><th><a href="directive-dict.html#Default">Valor por defecto:</a></th><td><code>MinSpareServers 5</code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>MPM</td></tr>
<tr><th><a href="directive-dict.html#Module">M&#243;dulo:</a></th><td>prefork</td></tr>
</table>
    <p>La directiva <code class="directive">MinSpareServers</code> fija el
    n&#250;mero m&#237;nimo de procesos hijo <em>en espera</em>. Un
    proceso en espera es aquel que no est&#225; atendiendo ninguna
    petici&#243;n. Si hay menos procesos hijo en espera que
    <code class="directive">MinSpareServers</code>, entonces el proceso padre
    crea nuevos procesos hijo a un ritmo m&#225;ximo de uno por
    segundo.</p>

    <p>Ajustar este par&#225;metro debe ser necesario solo en sitios
    web con muchas visitas. Fijar un valor alto para este
    par&#225;metro es una mala idea casi siempre.</p>

<h3>Consulte tambi&#233;n</h3>
<ul>
<li><code class="directive"><a href="#maxspareservers">MaxSpareServers</a></code></li>
<li><code class="directive"><a href="../mod/mpm_common.html#startservers">StartServers</a></code></li>
</ul>
</div>
</div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="../de/mod/prefork.html" hreflang="de" rel="alternate" title="Deutsch">&nbsp;de&nbsp;</a> |
<a href="../en/mod/prefork.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/prefork.html" title="Espa&#241;ol">&nbsp;es&nbsp;</a> |
<a href="../ja/mod/prefork.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="../tr/mod/prefork.html" hreflang="tr" rel="alternate" title="T&#252;rk&#231;e">&nbsp;tr&nbsp;</a></p>
</div><div id="footer">
<p class="apache">Copyright 2013 The Apache Software Foundation.<br />Licencia bajo los t&#233;rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="../mod/">M&#243;dulos</a> | <a href="../mod/directives.html">Directivas</a> | <a href="../faq/">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa de este sitio web</a></p></div>
</body></html>