package ltd.newbee.mall.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * @author motb
 * @date 2020/7/6 20:14
 * @description:
 */
@Configuration
public class ApiConfig {

    @Value("${upload.path}")
    private String uploadPath;

    public String getUploadPath() {
        return uploadPath;
    }
}
