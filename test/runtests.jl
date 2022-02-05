using Test: @test, @testset
import Pastebin

@testset "pastebin" begin
    @test Pastebin.content(Pastebin.getraw("Lt9PtFc4")) == "Hola mundo"
    @test Pastebin.content(Pastebin.getraw("gdQAnG2f")) == "Batido de mamey"
    @test Pastebin.success(Pastebin.getraw("gdQAnG2f"))
    @test Pastebin.parsekey("https://pastebin.com/gdQAnG2f") == "gdQAnG2f"

    client = Pastebin.Client(ENV["PASTEBIN_DEVKEY"])
    data = "hola $(randn())"
    response = Pastebin.paste(client, "A pastebin test", data; expire="1H")
    key = Pastebin.parsekey(response)
    @test Pastebin.content(Pastebin.getraw(key)) == data
end
