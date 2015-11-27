package routers

import (
	"demo2/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
    beego.Router("/about", &controllers.AboutController{})
    beego.Router("/works", &controllers.WorkController{})
    beego.Router("/studygolang", &controllers.StudyGolangController{})
    beego.Router("/share", &controllers.ShareController{})
}
