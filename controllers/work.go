package controllers

import (
	"github.com/astaxie/beego"
)

type WorkController struct {
	beego.Controller
}

func (c *WorkController) Get() {
	c.TplNames = "work.html"
}
