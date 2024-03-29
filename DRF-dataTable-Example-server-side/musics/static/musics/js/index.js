let table = $('#datatables').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
        "url": "/api/music/",
        "type": "GET"
    },
    "columns": [
        {"data": "id"},
        {"data": "song"},
        {"data": "singer"},
        {"data": "last_modify_date"},
        {"data": "created"},
        {
            "data": null,
            "defaultContent": '<button type="button" class="btn btn-info">Edit</button>' + '&nbsp;&nbsp' +
            '<button type="button" class="btn btn-danger">Delete</button>'
        }
    ]
});


