package controllers

import (
	"github.com/astaxie/beego"
)

type AjaxController struct {
	beego.Controller
}

func (c *AjaxController) Get() {
    c.Ctx.WriteString("love z")
}
