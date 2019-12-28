import Mock from "mockjs";
import user from "./user";

const random = Mock.Random;

Mock.mock("/api/login/checkMemberLogin", "post", function(req) {
  // 此处会劫持/api/login/checkMemberLogin接口，并返回数据
  const urlParams = JSON.parse(req.body);
  const { loginName, pwd } = urlParams;
  if (loginName === "linjian" && pwd === "123456") {
    return user.loginSucess; // 返回模拟数据
  } else {
    return user.loginFailed;
  }
});

Mock.mock("/api/blog/addBlog", "post", function(req) {
  // 此处会劫持/api/login/checkMemberLogin接口，并返回数据
  return {
    flag: "1",
    msg: "新增成功"
  };
});

Mock.mock("/api/blog/getBlogList", "post", function(req) {
  const items = [];
  for (let index = 0; index < 8; index++) {
    items.push(
      Mock.mock({
        articalID: random.id(),
        articalTitle: random.cname(),
        articalAuthor: random.cname(),
        articalTime: random.time(),
        articalClick: random.integer(10, 100)
      })
    );
  }
  return {
    flag: "1",
    items: items,
    msg: "查询成功"
  };
});
