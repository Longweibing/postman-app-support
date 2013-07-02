var Storage = Backbone.Model.extend({
    defaults: function() {
    },

    getValue: function(key, callback) {
        if (pm.target === pm.targets.CHROME_LEGACY_APP) {
            //Implementation here
            console.log("Get value for legacy app");
        }
        else if (pm.target === pm.targets.CHROME_PACKAGED_APP) {
            var obj = {};
            obj[key] = null;
            chrome.storage.local.get(obj, function(result) {
                callback(result[key]);
            });
        }
    },

    setValue: function(kvpair, callback) {
        if (pm.target === pm.targets.CHROME_LEGACY_APP) {
            //Implementation here
            console.log("Set value for legacy app");
        }
        else if (pm.target === pm.targets.CHROME_PACKAGED_APP) {
            chrome.storage.local.set(kvpair, function() {
            });
        }
    }
});