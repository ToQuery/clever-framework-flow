package com.dragon.flow.config;

import org.springframework.context.annotation.Configuration;

/**
 * @program: flow
 * @description: 接口配置
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:52
 **/
@Configuration
public class SwaggerConfig {
    //在构建文档的时候 只显示添加了@Api注解的类
//    @Bean //作为bean纳入spring容器
//    public Docket apiInfo() {
//        return new Docket(DocumentationType.SWAGGER_2).apiInfo(
//                new ApiInfoBuilder()
//                        .contact(new Contact("Bruce.liu", "www.dragon.com", "463805737@qq.com"))
//                        .title("企业级流程中心项目")
//                        .build()
//        );
//
//    }




//    private ApiInfo apiInfo() {
//        return new ApiInfoBuilder()
//                .title("API接口文档")
//                .description("API接口文档，及相关接口的说明")
//                .version("1.0.0")
//                .build();
//    }
}
