package com.yodainjs.uvsconventions;

import com.yodainjs.uvsconventions.config.AsyncSyncConfiguration;
import com.yodainjs.uvsconventions.config.EmbeddedElasticsearch;
import com.yodainjs.uvsconventions.config.EmbeddedSQL;
import com.yodainjs.uvsconventions.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { UvsConventionsApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedElasticsearch
@EmbeddedSQL
public @interface IntegrationTest {
}
