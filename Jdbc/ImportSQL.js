function ImportSQL() {

    var stringUrl = "stringUrl";
    var login = 'login';
    var password = 'password';
    var conn = Jdbc.getConnection(stringUrl, login, password);

    var stmtSelect = conn.createStatement();

    var results = stmtSelect.executeQuery("SELECT * FROM table");

    while (results.next()) {
        var col1 = results.getInt(1);
        var col1 = results.getInt(2);
        var col1 = results.getString(3);
    }

    results.close();
    stmtSelect.close();
}
