Ext.application({
    name: 'Example 8: A todo application',
    launch: function() {
        var grid = this.createGrid();
        var panel = Ext.create('Ext.panel.Panel', {
            region: 'east',
            width: 200,
            title: 'Details'
        });
        var form = this.createForm();

        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [grid, panel, form]
        });
    },

    createGrid: function () {
        var store = Ext.create('Ext.data.Store', {
            id: 'todoStore',
            autoLoad: true,
            fields:['title', 'importance'],
            proxy:{
                type: 'ajax',
                url: 'todos.php',
                reader:{
                    type: 'json',
                    root: 'data',
                    successProperty: 'success',
                    totalProperty: 'total'
                }
            }
        });

        var grid = Ext.create('Ext.grid.Panel', {
            title: 'Todos',
            store: store,
            selType: 'rowmodel',
            region: 'center',
            columns: [
                { text: 'Title',  dataIndex: 'title', flex: 1 },
                { text: 'Importance', dataIndex: 'importance' }
            ],
            listeners: {
                'selectionchange': function (selectionModel, records) {
                    var tpl = new Ext.XTemplate(
                        '<p>Title: {title}</p>',
                        '<p>Details: {details}</p>',
                        '<p>Importance: {importance}</p>'
                    );
                    var panel = this.up('viewport').items.get(1);

                    tpl.overwrite(panel.body, records[0].data);
                }
            }
        });

        return grid;
    },

    createForm: function () {
        var formPanel = Ext.create('Ext.form.Panel', {
            title: 'Create a TODO item',
            region: 'south',
            height: 400,
            url: 'add-todo.php',
            defaults: {
                padding: 10
            },
            items: [{
                xtype: 'textfield',
                name: 'title',
                fieldLabel: 'Title'
            },{
                xtype: 'textarea',
                name: 'details',
                fieldLabel: 'Details'
            },{
                xtype: 'combo',
                name: 'importance',
                fieldLabel: 'Importance',
                store: ['Low', 'Medium', 'High'],
                queryMode: 'local'
            }],
            buttons: [{
                text: 'Submit',
                formBind: true,
                disabled: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            success: function(form, action) {
                                var grid = formPanel.up('viewport').items.get(0);
                                grid.store.add(action.result.data);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                            },
                            scope: formPanel
                        });
                    }
                }
            }]
        });

        return formPanel;
    }
});
