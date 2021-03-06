Ext.application({
    name: 'Example 6: Forms',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Create a TODO item',
                    xtype: 'form',
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
                                        Ext.Msg.alert('Success', action.result.msg);
                                    },
                                    failure: function(form, action) {
                                        Ext.Msg.alert('Failed', action.result.msg);
                                    }
                                });
                            }
                        }
                    }]
                }
            ]
        });
    }
});
