package bookmarks.controllers;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/csrf")
public class CSRFTokenController {
    @GetMapping
    public CsrfToken getCsrf(CsrfToken csrfToken) {
        return csrfToken;
    }
};