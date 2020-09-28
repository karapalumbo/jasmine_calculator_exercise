describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  afterEach(function () {
    serverNameInput.value = "";
    allServers = {};
  });

  it("should update server table", function () {
    submitServerInfo();
    serverNameInput.value = "Henry";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(2);
    expect(allServers["server" + serverId].serverName).toEqual("Henry");
  });
});
