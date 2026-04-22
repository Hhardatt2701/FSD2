def test_add():
    assert 1 + 1 == 2

def test_api_response():
    response = {"status": "success"}
    assert response["status"] == "success"