Ext.application({
    name: 'Example 2: Viewports',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Example 1: A viewport',
                    html: '<p>Here is some arbitrary HTML rendered inside a panel within a viewport.</p>'
                          + '<p>Viewports stretch to fit the body of the page.</p>'
                }
            ]
        });
    }
});
