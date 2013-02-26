Ext.application({
    name: 'Example 3: Layouts',
    launch: function() {
        this.borderLayoutExample();
    },

    fitLayoutExample: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Fit layout',
                    html: '<p>Fit layouts are used to stretch the component to the size of the container.</p>'
                }
            ]
        });
    },

    vboxLayoutExample: function () {
        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [{
                xtype: 'panel',
                title: 'Inner Panel One',
                html: 'Vbox layouts stack content vertically',
                width: 250,
                flex: 2
            },
            {
                xtype: 'panel',
                title: 'Inner Panel Two',
                width: 250,
                flex: 2
            },
            {
                xtype: 'panel',
                title: 'Inner Panel Three',
                width: '50%',
                flex: 4
            }]
        });
    },

    borderLayoutExample: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                title: 'South Region is resizable',
                region: 'south',     // position for region
                xtype: 'panel',
                height: 100,
                split: true,         // enable resizing
                margins: '0 5 5 5'
            },{
                // xtype: 'panel' implied by default
                title: 'West Region is collapsible',
                region:'west',
                xtype: 'panel',
                margins: '5 0 0 5',
                width: 200,
                collapsible: true,   // make collapsible
                id: 'west-region-container',
                layout: 'fit'
            },{
                title: 'Center Region',
                region: 'center',     // center region is required, no width/height specified
                xtype: 'panel',
                layout: 'fit',
                margins: '5 5 0 0',
                html: 'Border layouts arrange content into five regions - north, south, east, west and center'
            }]
        });
    }
});
