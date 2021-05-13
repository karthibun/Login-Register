package com.project.LoginRegisterHtml;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping
public class MainController {

	@RequestMapping("")
	public ModelAndView index() {
		return new ModelAndView("index");
	}
	
	@RequestMapping("/login")
	public ModelAndView login() {
		return new ModelAndView("Login");
	}
	
	@RequestMapping("/register")
	public ModelAndView register() {
		return new ModelAndView("register");
	}
	
	@RequestMapping("/home")
	public ModelAndView home() {
			return new ModelAndView("Home");
	}
}
