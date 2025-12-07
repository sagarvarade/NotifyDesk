package org.notifydeskUI;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NotifyDeskController {

    //@RequestMapping(value = "/**/{[path:[^\\.]*}")
    @RequestMapping(value = {"/ui/**", "/**/{path:[^\\.]*}"})
    public ModelAndView home() {
        return new ModelAndView("index");
    }
    @GetMapping("/notify-desk")
    public  String broadComUI(){
        return  "Notify Desk UI up...";
    }
}