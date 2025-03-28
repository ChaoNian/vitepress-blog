---
# https://vitepress.dev/reference/default-theme-home-page
# 参考 https://article.juejin.cn/post/7409865546197893171
layout: home

hero:
  name: "前端技术"
  # text: "探索记录"
  tagline: ""
  image: 
     src: /background.svg
     alt: 背景图片
  actions:
    - theme: brand
      text: 前端博客
      link: /markdown-examples
    # - theme: alt
      # text: API Examples
      # link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<style>
    :root {
      --vp-home-hero-name-color: transparent;
      --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

      --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
      --vp-home-hero-image-filter: blur(44px);
    }

    @media (min-width: 640px) {
      :root {
        --vp-home-hero-image-filter: blur(56px);
      }
    }

    @media (min-width: 960px) {
      :root {
        --vp-home-hero-image-filter: blur(68px);
      }
    }
    </style>



