package controllers

import (
	"github.com/astaxie/beego"
)

type AboutController struct {
	beego.Controller
}

func (c *AboutController) Get() {
//	c.Data["title"] = "love"
	c.TplNames = "about.html"
}
