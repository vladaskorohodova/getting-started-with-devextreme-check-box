$(function () {
    $("#check-box").dxCheckBox({
        value: null,
        text: 'Approve',
        hint: 'Approve',
        iconSize: 25,
        onValueChanged: function(e) {
            if (e.value) {
                DevExpress.ui.notify("The CheckBox is checked", "success", 500);
            }
        }
    });
});