package com.nttdata.karateProject.karate;
import com.intuit.karate.cli.IdeMain;
import com.intuit.karate.junit5.Karate;

import static org.apache.commons.lang3.StringUtils.defaultString;

class RunnerTest {
    // solucionar para no tener que traer solo este path
    @Karate.Test
    Karate testUsers() {
        return Karate.run("src/test/resources/com/nttdata/karate-project/karate/Reqres");
    }
}