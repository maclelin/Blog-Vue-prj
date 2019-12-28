import Login from "../pages/Login.vue";
import BlogList from "../pages/BlogList.vue";
import BlogInput from "../pages/BlogInput.vue";
import BlogDetail from "../pages/BlogDetail.vue";
import BlogLink from "../pages/BlogLink.vue";
import BlogAbout from "../pages/BlogAbout.vue";
import NotFountPage from "../pages/NotFoundPage.vue";
import BlogTitle from "../components/BlogTitle.vue";

const routes = [
  {
    path: "*",
    component: NotFountPage
  },
  {
    path: "/",
    component: BlogList
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/BlogList",
    components: {
      default: BlogList,
      BlogTitle
    }
  },
  {
    path: "/BlogInput",
    components: {
      default: BlogInput,
      BlogTitle
    }
  },
  {
    path: "/BlogAbout",
    components: {
      default: BlogAbout,
      BlogTitle
    }
  },
  {
    path: "/BlogLink",
    components: {
      default: BlogLink,
      BlogTitle
    }
  },
  {
    path: "/BlogDetail/:id",
    components: {
      default: BlogDetail,
      BlogTitle
    }
  }
];

export default routes;
