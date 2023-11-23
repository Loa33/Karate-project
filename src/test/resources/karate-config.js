function fn() {
    function read(file) {
        try {
            return karate.read(file);
        } catch (e) {
            karate.log('File not found: ' + file)
            return {};
        }
    }
    //para setear las configuraciones del proyecto, como la url por ejemplo
    karate.set(karate.read('classpath:config.yml'));
    // seteamos en karate, si en caso nuestro comando tiene un karate.env definido:
    if (karate.env != null) {
        // podríamos crear configuraciones por ambientes mediante
        karate.set(karate.read(`classpath:config-${karate.env}.yml`));
    }
    // para esto, se necesitará tener un archivo config-local para poder obtener las configuraciones de ese documento.
    return null;
}