package controllers

import (
	"github.com/astaxie/beego"
)

type StudyGolangController struct {
	beego.Controller
}

func (c *StudyGolangController) Get() {
	c.TplNames = "studygolang.html"
}
