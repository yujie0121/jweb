package tech.yujie.jweb.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * created by jie
 */
@RestController
public class CodeWebhookController {

    @RequestMapping(value = "/code/hook", method = RequestMethod.POST)
    public String hook(@RequestBody String body) {
        System.out.println(body);
        new Thread(this::excuteShell).start();
        return body;
    }

    private void excuteShell() {
        Runtime runtime = Runtime.getRuntime();
        try {
            Process ps = runtime.exec("/usr/local/scripts/start_jspider.sh");
            ps.waitFor();

            BufferedReader br = new BufferedReader(new InputStreamReader(ps.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                sb.append(line).append("\n");
            }
            String result = sb.toString();
            System.out.println("+++++++++++++");
            System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
