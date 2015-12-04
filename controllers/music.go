package controllers

import (
	"github.com/astaxie/beego"
)

type MusicController struct {
	beego.Controller
}

func (c *MusicController) Get() {
	c.TplNames = "music.html"
}
