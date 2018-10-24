package tech.yujie.jweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @description:
 * @author: yujie01
 * @date: 2018-09-28 下午10:29
 */

@Controller
public class HomeController {

    @RequestMapping("/home")
    public String home(){
        return "index";
    }

    @RequestMapping("/test")
    @ResponseBody
    public String test(){
        return "hello world";
    }
}
