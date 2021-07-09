<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>Uso de los Handlers en Apache - Servidor HTTP Apache Versi&#243;n 2.2</title>
<link href="./style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="./style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="./style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="./style/css/prettify.css" />
<script src="./style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="./images/favicon.ico" rel="shortcut icon" /><link href="http://httpd.apache.org/docs/current/handler.html" rel="canonical" /></head>
<body id="manual-page"><div id="page-header">
<p class="menu"><a href="./mod/">M&#243;dulos</a> | <a href="./mod/directives.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="./glossary.html">Glosario</a> | <a href="./sitemap.html">Mapa de este sitio web</a></p>
<p class="apache">Versi&#243;n 2.2 del Servidor HTTP Apache</p>
<img alt="" src="./images/feather.gif" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="./images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci&#243;n</a> &gt; <a href="./">Versi&#243;n 2.2</a></div><div id="page-content"><div class="retired"><h4>Please note</h4>
            <p>This document refers to the <strong>2.2</strong> version of Apache httpd, which is no longer maintained. The active release is documented <a href="http://httpd.apache.org/docs/current">here</a>. If you have not already upgraded, please follow <a href="http://httpd.apache.org/docs/current/upgrading.html">this link</a> for more information.</p>
        <p>You may follow <a href="http://httpd.apache.org/docs/current/handler.html">this link</a> to go to the current version of this document.</p></div><div id="preamble"><h1>Uso de los Handlers en Apache</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="./en/handler.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="./es/handler.html" title="Espa&#241;ol">&nbsp;es&nbsp;</a> |
<a href="./fr/handler.html" hreflang="fr" rel="alternate" title="Fran&#231;ais">&nbsp;fr&nbsp;</a> |
<a href="./ja/handler.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="./ko/handler.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="./ru/handler.html" hreflang="ru" rel="alternate" title="Russian">&nbsp;ru&nbsp;</a> |
<a href="./tr/handler.html" hreflang="tr" rel="alternate" title="T&#252;rk&#231;e">&nbsp;tr&nbsp;</a> |
<a href="./zh-cn/handler.html" hreflang="zh-cn" rel="alternate" title="Simplified Chinese">&nbsp;zh-cn&nbsp;</a></p>
</div>
<div class="outofdate">Esta traducci&#243;n podr&#237;a estar
            obsoleta. Consulte la versi&#243;n en ingl&#233;s de la
            documentaci&#243;n para comprobar si se han producido cambios
            recientemente.</div>

    <p>Este documento describe el uso de los Handlers en Apache.</p>
  </div>
<div id="quickview"><ul id="toc"><li><img alt="" src="./images/down.gif" /> <a href="#definition">&#191;Qu&#233; es un Handler?</a></li>
<li><img alt="" src="./images/down.gif" /> <a href="#examples">Ejemplos</a></li>
<li><img alt="" src="./images/down.gif" /> <a href="#programmer">Nota para programadores</a></li>
</ul><ul class="seealso"><li><a href="#comments_section">Comentarios</a></li></ul></div>
<div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="definition" id="definition">&#191;Qu&#233; es un Handler?</a></h2>
    
    <table class="related"><tr><th>M&#243;dulos Relacionados</th><th>Directivas Relacionadas</th></tr><tr><td><ul><li><code class="module"><a href="./mod/mod_actions.html">mod_actions</a></code></li><li><code class="module"><a href="./mod/mod_asis.html">mod_asis</a></code></li><li><code class="module"><a href="./mod/mod_cgi.html">mod_cgi</a></code></li><li><code class="module"><a href="./mod/mod_imagemap.html">mod_imagemap</a></code></li><li><code class="module"><a href="./mod/mod_info.html">mod_info</a></code></li><li><code class="module"><a href="./mod/mod_mime.html">mod_mime</a></code></li><li><code class="module"><a href="./mod/mod_negotiation.html">mod_negotiation</a></code></li><li><code class="module"><a href="./mod/mod_status.html">mod_status</a></code></li></ul></td><td><ul><li><code class="directive"><a href="./mod/mod_actions.html#action">Action</a></code></li><li><code class="directive"><a href="./mod/mod_mime.html#addhandler">AddHandler</a></code></li><li><code class="directive"><a href="./mod/mod_mime.html#removehandler">RemoveHandler</a></code></li><li><code class="directive"><a href="./mod/core.html#sethandler">SetHandler</a></code></li></ul></td></tr></table>


    <p>Un "handler" es una representaci&#243;n interna de Apache de
    una acci&#243;n que se va a ejecutar cuando hay una llamada a un
    fichero. Generalmente, los ficheros tienen handlers
    impl&#237;citos, basados en el tipo de fichero de que se
    trata. Normalmente, todos los ficheros son simplemente servidos
    por el servidor, pero algunos tipos de ficheros se tratan de forma
    diferente.</p>

    <p>Apache 1.1 a&#241;ade la posibilidad de usar handlers
    explicitamente.  Bas&#225;ndose en la extension del fichero o en
    la ubicaci&#243;n en la que este, se pueden especificar handlers
    sin tener en cuenta el tipo de fichero de que se trate. Esto es
    una ventaja por dos razones. Primero, es una soluci&#243;n
    m&#225;s elegante. Segundo, porque a un fichero se le pueden
    asignar tanto un tipo <strong>como</strong> un handler. (Consulte
    tambi&#233;n la secci&#243;n <a href="mod/mod_mime.html#multipleext">Ficheros y extensiones
    m&#250;ltiples</a>.)</p>

    <p>Los Handlers pueden ser tanto ser compilados con el servidor
    como incluidos en un m&#243;dulo, como a&#241;adidos con la
    directiva <code class="directive"><a href="./mod/mod_actions.html#action">Action</a></code>. Los
    handlers compilados con el servidor de la distribuci&#243;n
    est&#225;ndar de Apache son:</p>

    <ul>
      <li><strong>default-handler</strong>: Env&#237;a el fichero
      usando el <code>default_handler()</code>, que es el handler
      usado por defecto para tratar contenido
      est&#225;tico. (core)</li>

      <li><strong>send-as-is</strong>: Env&#237;a el fichero con
      cabeceras HTTP tal y como es. (<code class="module"><a href="./mod/mod_asis.html">mod_asis</a></code>)</li>

      <li><strong>cgi-script</strong>: Trata el fichero como un sript
      CGI. (<code class="module"><a href="./mod/mod_cgi.html">mod_cgi</a></code>)</li>

      <li><strong>imap-file</strong>: Trata el fichero como un mapa de
      im&#225;genes. (<code class="module"><a href="./mod/mod_imagemap.html">mod_imagemap</a></code>)</li>

      <li><strong>server-info</strong>: Extrae la informaci&#243;n de
      configuraci&#243;n del
      servidor. (<code class="module"><a href="./mod/mod_info.html">mod_info</a></code>)</li>

      <li><strong>server-status</strong>: Extrae el informe de estado
      del servidor. (<code class="module"><a href="./mod/mod_status.html">mod_status</a></code>)</li>

      <li><strong>type-map</strong>: Trata el fichero como una
      correspondencia de tipos para la negociaci&#243;n de contenidos.
      (<code class="module"><a href="./mod/mod_negotiation.html">mod_negotiation</a></code>)</li> </ul> </div><div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="examples" id="examples">Ejemplos</a></h2> 

    <h3><a name="example1" id="example1">Modificar contenido est&#225;tico usando un script
      CGI</a></h3>
      

      <p>Las siguientes directivas hacen que cuando haya una
      petici&#243;n de ficheros con la extensi&#243;n
      <code>html</code> se lance el script CGI
      <code>footer.pl</code>.</p>

      <div class="example"><p><code>
        Action add-footer /cgi-bin/footer.pl<br />
        AddHandler add-footer .html
      </code></p></div>

      <p>En este caso, el script CGI es el responsable de enviar el
      documento originalmente solicitado (contenido en la variable de
      entorno <code>PATH_TRANSLATED</code>) y de hacer cualquier
      modificaci&#243;n o a&#241;adido deseado.</p>

    
    <h3><a name="example2" id="example2">Archivos con cabaceras HTTP</a></h3>
      

      <p>Las siguientes directivas activan el handler
      <code>send-as-is</code>, que se usa para ficheros que contienen
      sus propias cabeceras HTTP. Todos los archivos en el directorio
      <code>/web/htdocs/asis/</code> ser&#225;n procesados por el
      handler <code>send-as-is</code>, sin tener en cuenta su
      extension.</p>

      <div class="example"><p><code>
        &lt;Directory /web/htdocs/asis&gt;<br />
        SetHandler send-as-is<br />
        &lt;/Directory&gt;
      </code></p></div>

    
  </div><div class="top"><a href="#page-header"><img alt="top" src="./images/up.gif" /></a></div>
<div class="section">
<h2><a name="programmer" id="programmer">Nota para programadores</a></h2>
    

    <p>Para implementar las funcionalidades de los handlers, se ha
    hecho un a&#241;adido a la <a href="developer/API.html">API de
    Apache</a> que puede que quiera usar. Para ser m&#225;s
    espec&#237;ficos, se ha a&#241;adido un nuevo registro a la
    estructura <code>request_rec</code>:</p>

    <div class="example"><p><code>
      char *handler
    </code></p></div>

    <p>Si quiere que su m&#243;dulo llame a un handler , solo tiene
    que a&#241;adir <code>r-&gt;handler</code> al nombre del handler
    en cualquier momento antes de la fase <code>invoke_handler</code>
    de la petici&#243;n. Los handlers se implementan siempre como se
    hac&#237;a antes, aunque usando el nombre del handler en vez de un
    tipo de contenido. Aunque no es de obligado cumplimiento, la
    convenci&#243;n de nombres para los handlers es que se usen
    palabras separadas por guiones, sin barras, de manera que no se
    invada el media type name-space.</p>
  </div></div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="./en/handler.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="./es/handler.html" title="Espa&#241;ol">&nbsp;es&nbsp;</a> |
<a href="./fr/handler.html" hreflang="fr" rel="alternate" title="Fran&#231;ais">&nbsp;fr&nbsp;</a> |
<a href="./ja/handler.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="./ko/handler.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="./ru/handler.html" hreflang="ru" rel="alternate" title="Russian">&nbsp;ru&nbsp;</a> |
<a href="./tr/handler.html" hreflang="tr" rel="alternate" title="T&#252;rk&#231;e">&nbsp;tr&nbsp;</a> |
<a href="./zh-cn/handler.html" hreflang="zh-cn" rel="alternate" title="Simplified Chinese">&nbsp;zh-cn&nbsp;</a></p>
</div><div class="top"><a href="#page-header"><img src="./images/up.gif" alt="top" /></a></div><div class="section"><h2><a id="comments_section" name="comments_section">Comentarios</a></h2><div class="warning"><strong>Notice:</strong><br />This is not a Q&amp;A section. Comments placed here should be pointed towards suggestions on improving the documentation or server, and may be removed again by our moderators if they are either implemented or considered invalid/off-topic. Questions on how to manage the Apache HTTP Server should be directed at either our IRC channel, #httpd, on Libera.chat, or sent to our <a href="http://httpd.apache.org/lists.html">mailing lists</a>.</div>
<script type="text/javascript"><!--//--><![CDATA[//><!--
var comments_shortname = 'httpd';
var comments_identifier = 'http://httpd.apache.org/docs/2.2/handler.html';
(function(w, d) {
    if (w.location.hostname.toLowerCase() == "httpd.apache.org") {
        d.write('<div id="comments_thread"><\/div>');
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://comments.apache.org/show_comments.lua?site=' + comments_shortname + '&page=' + comments_identifier;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
    else { 
        d.write('<div id="comments_thread">Comments are disabled for this page at the moment.<\/div>');
    }
})(window, document);
//--><!]]></script></div><div id="footer">
<p class="apache">Copyright 2018 The Apache Software Foundation.<br />Licencia bajo los t&#233;rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="./mod/">M&#243;dulos</a> | <a href="./mod/directives.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="./glossary.html">Glosario</a> | <a href="./sitemap.html">Mapa de este sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>