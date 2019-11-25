package main

import (
	"html/template"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.New()

	// Expose Swagger-UI
	r.GET("/", func(c *gin.Context) {
		type Content struct {
			Host string
		}
		t := template.New("index.html")
		index, _ := t.Parse(swagger_ui_template)
		content := &Content{
			Host: "http://localhost:3000/static/swagger/swagger.json",
		}
		index.Execute(c.Writer, content)
	})

	//Static
	r.StaticFS("/static", http.Dir("static"))

	r.Run("0.0.0.0:3000")
}

const swagger_ui_template = `
<!-- HTML for static distribution bundle build -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Swagger UI</title>
    <link rel="stylesheet" type="text/css" href="/static/swagger/swagger-ui.css" >
    <link rel="icon" type="image/png" href="/static/swagger/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/static/swagger/favicon-16x16.png" sizes="16x16" />
    <style>
      html
      {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }

      *,
      *:before,
      *:after
      {
        box-sizing: inherit;
      }

      body
      {
        margin:0;
        background: #fafafa;
      }
    </style>
  </head>

  <body>
    <div id="swagger-ui"></div>

    <script src="/static/swagger/swagger-ui-bundle.js"> </script>
    <script src="/static/swagger/swagger-ui-standalone-preset.js"> </script>
    <script>
    window.onload = function() {

      // Build a system
      const ui = SwaggerUIBundle({
        url: "{{.Host}}",
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      })

      window.ui = ui
    }
  </script>
  </body>
</html>
`
