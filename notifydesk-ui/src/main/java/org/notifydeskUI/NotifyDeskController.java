package org.notifydeskUI;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NotifyDeskController {

    // @RequestMapping(value = "/**/{[path:[^\\.]*}")
    @RequestMapping(value = { "/ui/**", "/**/{path:[^\\.]*}" })
    public String home() {
        return "forward:/index.html";
    }

    @GetMapping("/notify-desk")
    public String broadComUI() {
        return "Notify Desk UI up...";
    }
}