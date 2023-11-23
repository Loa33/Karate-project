function fn() {
    const utils = {};

    utils.readTestData = (file) => {
        var folder = file.substring(0, file.lastIndexOf('/')+1);
        var baseName = file.substring(file.lastIndexOf('/')+1, file.lastIndexOf('.'))
        var extensions = file.substring(file.lastIndexOf('.'), file.length);
        var tokens = baseName.split('_');

        var files = [file];
        while (tokens.pop() && tokens.length > 0) {
            files.push(folder + tokens.join('_') + extensions);
        }
        files.push(folder + 'baseRequest' + extensions);

        files = files.reverse();

        var testData = utils.merge(
            ...files.map(function(file) {
                try {
                    return karate.read(file);
                } catch (e) {
                    return null;
                }
            })
        );

        return testData;
    };

    utils.isArray = (array) => {
        return Array.isArray(array) || ({}).toString.call(array).indexOf('Array') >= 0;
    }

    utils.merge = (...objects) => {
        if( objects == null) {
            return null;
        }

        if(karate.sizeOf(objects) <= 1) {
            return objects[0] || objects || {};
        }

        if(!utils.isArray(objects)) {
            objects = new Array(objects);
        }

        objects = objects.filter(function(obj) {
            return obj != null;
        });

        var target = {};
        (objects || []).forEach(function (source) {
            utils._deepMerge(target, source);
        })
        return target;
    }

    utils._deepMerge = (target, source) => {
        if (typeof source == 'object') {
            karate.keysOf(source).forEach(function (key) {
                if(utils.isArray(source[key]) || utils.isArray(target[key])) {
                    target[key] = target[key] || [];
                    if (target[key].concat) {
                        target[key] = target[key].concat(source[key]);
                    } else {
                        target[key].addAll(source[key]);
                    }
                }
                else if (target[key] && source[key] !== null && typeof source[key] === 'object') {
                    utils._deepMerge(target[key], source[key])
                } else {
                    target[key] = source[key];
                }
            });
        }
    }

    return utils;


}