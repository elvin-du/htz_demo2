package controllers

import (
	"github.com/astaxie/beego"
)

type ShareController struct {
	beego.Controller
}

func (c *ShareController) Get() {
	c.TplNames = "share.html"
}
