import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Qionglou',
      link: '/'
    },
    zh_cn: {
      label: '简体中文',
      lang: 'zh-cn',
      title: '琼楼',
      link: '/zh-cn/'
    }
  },
  themeConfig: {
    logo: {
      light: '/logo/light.png',
      dark: '/logo/dark.png'
    },
    siteTitle: false,
    nav: [
      {
        text: 'Getting Started',
        link: '/zh-cn/get-started/',
        items: [
          {
            text: '了解qionglou',
            link: '/zh-cn/get-started/'
          },
          {
            text: '贡献指南',
            link: '/zh-cn/get-started/dev_guides'
          }
        ]
      },
      {
        text: 'Command',
        link: ''
      },
      {
        text: 'Editor',
        link: '/zh-cn/components/index'
      },
      {
        text: 'Community',
        link: ''
      }
    ],
    sidebar: [
      {
        text: '感谢使用琼楼',
        link: '/zh-cn/get-started/',
        items: [
          {
            text: '<b style="color: darkgrey">基础组件</b>',
            items: [
              {
                text: '按钮',
                link: '/zh-cn/get-started/basic/button'
              },
              {
                text: '图标',
                link: '/zh-cn/get-started/basic/icon'
              },
              {
                text: '文本',
                link: '/zh-cn/get-started/basic/text'
              }
            ]
          },
          {
            text: '<b style="color: darkgrey">布局</b>',
            items: [
              { text: '区域布局', link: '/zh-cn/get-started/layout/fix' },
              { text: '内容分栏', link: '/zh-cn/get-started/layout/header' },
              { text: '内容区域', link: '/zh-cn/get-started/layout/main' },
              { text: '区域大小', link: '/zh-cn/get-started/layout/per' },
            ]
          },
          {
            text: '<b style="color: darkgrey">弹出层</b>',
            items: [
              { text: '加载组件', link: '/zh-cn/get-started/pop-up/loading' },
              { text: '抽屉层', link: '/zh-cn/get-started/pop-up/drawer' },
              { text: '提示框', link: '/zh-cn/get-started/pop-up/drawer' },
              { text: '对话框', link: '/zh-cn/get-started/pop-up/dialog' }
            ]
          },
        ]
      },
      {
        text: '<div style="display: flex;align-items: center;"><svg stroke="#e3e3e3" t aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">\n' +
            '    <path d="M8.048 2.241c.964-.709 2.079-1.238 3.325-1.241a4.616 4.616 0 0 1 3.282 1.355c.41.408.757.86.996 1.428.238.568.348 1.206.347 1.968 0 2.193-1.505 4.254-3.081 5.862-1.496 1.526-3.213 2.796-4.249 3.563l-.22.163a.749.749 0 0 1-.895 0l-.221-.163c-1.036-.767-2.753-2.037-4.249-3.563C1.51 10.008.007 7.952.002 5.762a4.614 4.614 0 0 1 1.353-3.407C3.123.585 6.223.537 8.048 2.24Zm-1.153.983c-1.25-1.033-3.321-.967-4.48.191a3.115 3.115 0 0 0-.913 2.335c0 1.556 1.109 3.24 2.652 4.813C5.463 11.898 6.96 13.032 8 13.805c.353-.262.758-.565 1.191-.905l-1.326-1.223a.75.75 0 0 1 1.018-1.102l1.48 1.366c.328-.281.659-.577.984-.887L9.99 9.802a.75.75 0 1 1 1.019-1.103l1.384 1.28c.295-.329.566-.661.81-.995L12.92 8.7l-1.167-1.168c-.674-.671-1.78-.664-2.474.03-.268.269-.538.537-.802.797-.893.882-2.319.843-3.185-.032-.346-.35-.693-.697-1.043-1.047a.75.75 0 0 1-.04-1.016c.162-.191.336-.401.52-.623.62-.748 1.356-1.637 2.166-2.417Zm7.112 4.442c.313-.65.491-1.293.491-1.916v-.001c0-.614-.088-1.045-.23-1.385-.143-.339-.357-.633-.673-.949a3.111 3.111 0 0 0-2.218-.915c-1.092.003-2.165.627-3.226 1.602-.823.755-1.554 1.637-2.228 2.45l-.127.154.562.566a.755.755 0 0 0 1.066.02l.794-.79c1.258-1.258 3.312-1.31 4.594-.032.396.394.792.791 1.173 1.173Z"></path>\n' +
            '</svg><p style="margin-left: 0.3vw;">社区准则</p></div>',
      },
      {
        text: '<div style="display: flex;align-items: center;"><svg stroke="#e3e3e3" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-law mr-2">\n' +
            '    <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>\n' +
            '</svg><p style="margin-left: 0.3vw;">安全策略</p></div>',
      },
      {
        text: '<div style="margin-top: 0.5vw;"><a href="https://github.com/jsrac/qionglou/blob/main/LICENSE"><svg width="79" height="87" viewBox="0 0 79 87" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<g clip-path="url(#clip0_243_77)">\n' +
            '<path d="M42.8981 43.514C46.8253 42.0506 48.8755 39.2326 48.8755 34.3825C48.8755 29.5324 44.8018 25.2587 39.7118 25.2501C34.3402 25.2415 30.2884 29.5147 30.3531 34.3825C30.4178 39.2503 32.7319 42.4886 36.4351 43.6595L29.8747 59.8526C21.0943 57.5719 12.1641 47.1793 12.1641 34.3825C12.1641 19.2257 24.3024 6.93848 39.5168 6.93848C54.7311 6.93848 67.0645 19.2257 67.0645 34.3825C67.0645 47.3783 58.2189 57.6263 49.2512 59.8979L42.8981 43.514Z" fill="white"/>\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5168 7.87737C24.8216 7.87737 13.0997 19.7419 13.0997 34.3827C13.0997 46.3925 21.2345 56.149 29.3247 58.7176L35.2053 44.2024C31.6192 42.6584 29.4813 39.1847 29.4176 34.3952C29.3458 28.9899 33.8333 24.3022 39.7133 24.3116H39.7134C45.3263 24.3211 49.8111 29.0216 49.8111 34.3827C49.8111 36.9392 49.2701 39.054 48.1354 40.7431C47.1614 42.1929 45.7945 43.2629 44.1028 44.0319L49.8157 58.7649C58.0694 56.2151 66.129 46.5891 66.129 34.3827C66.129 19.7506 54.2207 7.87737 39.5168 7.87737ZM11.2285 34.3827C11.2285 18.71 23.7833 6 39.5168 6C55.2417 6 68.0001 18.7013 68.0001 34.3827C68.0001 47.7769 58.8932 58.4239 49.4803 60.8083C49.0225 60.9242 48.5504 60.6799 48.3793 60.2385L42.0262 43.8545C41.9353 43.6202 41.942 43.359 42.0446 43.1296C42.1473 42.9002 42.3374 42.7218 42.5724 42.6342C44.3989 41.9536 45.7143 40.9881 46.5837 39.6938C47.4559 38.3955 47.9399 36.6763 47.9399 34.3827C47.9399 30.0436 44.2774 26.1967 39.7103 26.189C34.8472 26.1812 31.2311 30.04 31.2886 34.3702C31.3489 38.9078 33.465 41.7364 36.7164 42.7644C36.9656 42.8432 37.1705 43.0229 37.2818 43.2601C37.393 43.4973 37.4003 43.7703 37.3019 44.0132L30.7414 60.2063C30.5649 60.6421 30.0941 60.8794 29.6402 60.7615C20.4195 58.3664 11.2285 47.5781 11.2285 34.3827Z" fill="#D3D3D3"/>\n' +
            '<path d="M16.2422 67.9614C16.2422 68.8758 16.0105 69.5896 15.547 70.1027C15.0865 70.6126 14.4407 70.8675 13.6095 70.8675C12.8123 70.8675 12.1773 70.606 11.7045 70.083C11.2348 69.56 11 68.8528 11 67.9614C11 67.0503 11.2302 66.3431 11.6906 65.8399C12.1541 65.3333 12.803 65.0801 13.6373 65.0801C14.1534 65.0801 14.6091 65.1968 15.0047 65.4304C15.4002 65.6639 15.7046 65.9994 15.9178 66.4369C16.1341 66.8711 16.2422 67.3792 16.2422 67.9614ZM12.8401 67.9614C12.8401 68.4417 12.9004 68.8084 13.0209 69.0617C13.1414 69.3117 13.3438 69.4367 13.6281 69.4367C13.9093 69.4367 14.107 69.3117 14.2213 69.0617C14.3388 68.8084 14.3975 68.4417 14.3975 67.9614C14.3975 67.4845 14.3388 67.1243 14.2213 66.8809C14.1039 66.6375 13.9031 66.5158 13.6188 66.5158C13.3407 66.5158 13.1414 66.6375 13.0209 66.8809C12.9004 67.121 12.8401 67.4812 12.8401 67.9614Z" fill="#D3D3D3"/>\n' +
            '<path d="M20.4228 70.8675C20.1571 70.8675 19.9191 70.8214 19.709 70.7293C19.4989 70.6339 19.2903 70.4645 19.0833 70.2211H18.9999C19.0555 70.6126 19.0833 70.856 19.0833 70.9514V73.1962H17.271V65.1788H18.7449L18.9999 65.8892H19.0833C19.4201 65.3498 19.8852 65.0801 20.4784 65.0801C21.0594 65.0801 21.5151 65.3366 21.8458 65.8498C22.1764 66.3629 22.3417 67.0668 22.3417 67.9614C22.3417 68.8627 22.1687 69.5732 21.8226 70.0929C21.4796 70.6093 21.013 70.8675 20.4228 70.8675ZM19.8156 66.5948C19.5499 66.5948 19.3629 66.6967 19.2548 66.9007C19.1497 67.1013 19.0926 67.4006 19.0833 67.7986V67.9516C19.0833 68.4318 19.1435 68.7788 19.2641 68.9926C19.3846 69.2064 19.5746 69.3133 19.8342 69.3133C20.0659 69.3133 20.2343 69.2081 20.3394 68.9975C20.4444 68.7837 20.497 68.4318 20.497 67.9417C20.497 67.4615 20.4444 67.1178 20.3394 66.9105C20.2343 66.7 20.0597 66.5948 19.8156 66.5948Z" fill="#D3D3D3"/>\n' +
            '<path d="M25.906 70.8675C25.0316 70.8675 24.3518 70.6208 23.8666 70.1274C23.3846 69.6307 23.1436 68.9252 23.1436 68.0108C23.1436 67.0668 23.3676 66.3431 23.8156 65.8399C24.2637 65.3333 24.9033 65.0801 25.7345 65.0801C26.5256 65.0801 27.1359 65.3005 27.5654 65.7412C27.998 66.1787 28.2143 66.8102 28.2143 67.6358V68.4943H24.9744C24.9868 68.8068 25.0934 69.0518 25.2942 69.2294C25.4982 69.4071 25.7747 69.4959 26.1239 69.4959C26.4422 69.4959 26.7342 69.4646 26.9999 69.4021C27.2687 69.3363 27.5592 69.2262 27.8713 69.0716V70.458C27.587 70.6126 27.2935 70.7195 26.9906 70.7787C26.6878 70.8379 26.3263 70.8675 25.906 70.8675ZM25.7994 66.3925C25.5862 66.3925 25.407 66.4648 25.2618 66.6096C25.1196 66.751 25.0362 66.9747 25.0115 67.2806H26.5688C26.5627 67.0109 26.49 66.7954 26.351 66.6342C26.215 66.4731 26.0312 66.3925 25.7994 66.3925Z" fill="#D3D3D3"/>\n' +
            '<path d="M32.5621 70.7688V67.7197C32.5621 67.348 32.5111 67.0684 32.4091 66.8809C32.3103 66.6902 32.1496 66.5948 31.9271 66.5948C31.6212 66.5948 31.4002 66.7247 31.2643 66.9845C31.1283 67.2444 31.0603 67.6901 31.0603 68.3216V70.7688H29.248V65.1788H30.6154L30.8425 65.8695H30.9491C31.1036 65.6064 31.3168 65.409 31.5887 65.2774C31.8637 65.1459 32.1789 65.0801 32.5343 65.0801C33.1152 65.0801 33.5663 65.2593 33.8877 65.6179C34.2122 65.9764 34.3744 66.4813 34.3744 67.1326V70.7688H32.5621Z" fill="#D3D3D3"/>\n' +
            '<path d="M41.6701 69.2142C41.6701 69.7471 41.4878 70.1566 41.1232 70.4428C40.7586 70.7256 40.2364 70.8671 39.5566 70.8671C38.8737 70.8671 38.3252 70.7569 37.9111 70.5365V69.5349C38.5137 69.831 39.0745 69.979 39.5936 69.979C40.2642 69.979 40.5994 69.7635 40.5994 69.3326C40.5994 69.1945 40.5624 69.0794 40.4882 68.9873C40.414 68.8952 40.292 68.7998 40.122 68.7011C39.9521 68.6024 39.7157 68.4906 39.4129 68.3656C38.8227 68.1222 38.4225 67.8788 38.2124 67.6354C38.0054 67.392 37.9019 67.0762 37.9019 66.6881C37.9019 66.221 38.078 65.8592 38.4302 65.6027C38.7856 65.3428 39.2676 65.2129 39.8764 65.2129C40.4789 65.2129 41.049 65.3428 41.5867 65.6027L41.2344 66.476C40.6813 66.2326 40.2163 66.1109 39.8393 66.1109C39.2646 66.1109 38.9772 66.2852 38.9772 66.6338C38.9772 66.8049 39.0513 66.9496 39.1997 67.068C39.3511 67.1864 39.6786 67.3492 40.1823 67.5565C40.6056 67.7308 40.9131 67.8903 41.1047 68.035C41.2962 68.1798 41.4384 68.3475 41.5311 68.5383C41.6238 68.7258 41.6701 68.9511 41.6701 69.2142Z" fill="#D3D3D3"/>\n' +
            '<path d="M47.3895 68.0301C47.3895 68.9215 47.1747 69.6172 46.7452 70.1171C46.3157 70.6171 45.7178 70.8671 44.9515 70.8671C44.4725 70.8671 44.0492 70.752 43.6815 70.5217C43.3138 70.2915 43.031 69.9609 42.8333 69.53C42.6355 69.0991 42.5366 68.5992 42.5366 68.0301C42.5366 67.1453 42.7498 66.4546 43.1763 65.9579C43.6027 65.4612 44.2037 65.2129 44.9793 65.2129C45.7209 65.2129 46.308 65.4678 46.7406 65.9776C47.1732 66.4842 47.3895 67.1683 47.3895 68.0301ZM43.6583 68.0301C43.6583 69.2899 44.0955 69.9198 44.97 69.9198C45.8352 69.9198 46.2678 69.2899 46.2678 68.0301C46.2678 66.7835 45.8321 66.1602 44.9607 66.1602C44.5034 66.1602 44.1712 66.3214 43.9642 66.6437C43.7603 66.966 43.6583 67.4282 43.6583 68.0301Z" fill="#D3D3D3"/>\n' +
            '<path d="M52.2608 70.7684L52.1078 70.0529H52.0522C51.9008 70.3062 51.6845 70.5052 51.4033 70.6499C51.1252 70.7947 50.8069 70.867 50.4485 70.867C49.8274 70.867 49.3639 70.7026 49.058 70.3736C48.7521 70.0447 48.5991 69.5464 48.5991 68.8787V65.3115H49.6976V68.6764C49.6976 69.0941 49.778 69.4083 49.9386 69.6188C50.0993 69.826 50.3512 69.9296 50.6942 69.9296C51.1515 69.9296 51.4867 69.7849 51.7 69.4954C51.9163 69.2027 52.0244 68.7142 52.0244 68.0301V65.3115H53.1183V70.7684H52.2608Z" fill="#D3D3D3"/>\n' +
            '<path d="M57.2716 65.2129C57.491 65.2129 57.6718 65.2293 57.8139 65.2622L57.7073 66.3427C57.5528 66.3033 57.3921 66.2835 57.2253 66.2835C56.7896 66.2835 56.4358 66.4348 56.1639 66.7374C55.895 67.0401 55.7606 67.4331 55.7606 67.9166V70.7684H54.6714V65.3116H55.5242L55.6679 66.2737H55.7235C55.8935 65.948 56.1144 65.6898 56.3863 65.4991C56.6614 65.3083 56.9565 65.2129 57.2716 65.2129Z" fill="#D3D3D3"/>\n' +
            '<path d="M60.836 70.8671C60.0604 70.8671 59.4702 70.627 59.0654 70.1467C58.6637 69.6632 58.4629 68.9708 58.4629 68.0696C58.4629 67.1519 58.673 66.4464 59.0933 65.953C59.5166 65.4596 60.1269 65.2129 60.9241 65.2129C61.4648 65.2129 61.9515 65.3198 62.3841 65.5336L62.055 66.4661C61.5946 66.2753 61.2146 66.1799 60.9148 66.1799C60.028 66.1799 59.5846 66.8065 59.5846 68.0597C59.5846 68.6715 59.6943 69.132 59.9137 69.4412C60.1361 69.7471 60.4606 69.9 60.887 69.9C61.3721 69.9 61.831 69.7718 62.2636 69.5152V70.5266C62.0689 70.6483 61.8604 70.7355 61.6379 70.7881C61.4185 70.8408 61.1512 70.8671 60.836 70.8671Z" fill="#D3D3D3"/>\n' +
            '<path d="M65.7165 70.8671C64.9193 70.8671 64.2951 70.6204 63.844 70.127C63.3959 69.6303 63.1719 68.9478 63.1719 68.0795C63.1719 67.1881 63.3805 66.4875 63.7976 65.9776C64.2148 65.4678 64.788 65.2129 65.5172 65.2129C66.1939 65.2129 66.7285 65.4316 67.1209 65.8691C67.5133 66.3066 67.7096 66.9085 67.7096 67.6749V68.3015H64.2936C64.309 68.831 64.4434 69.2389 64.6968 69.5251C64.9502 69.8079 65.3071 69.9494 65.7675 69.9494C66.0703 69.9494 66.3515 69.9198 66.6111 69.8606C66.8737 69.7981 67.1549 69.6961 67.4546 69.5547V70.497C67.1889 70.6319 66.9201 70.7273 66.6481 70.7832C66.3762 70.8391 66.0657 70.8671 65.7165 70.8671ZM65.5172 66.0911C65.1711 66.0911 64.893 66.2079 64.6829 66.4414C64.4759 66.675 64.3523 67.0154 64.3121 67.4627H66.6389C66.6327 67.0121 66.5307 66.6717 66.333 66.4414C66.1352 66.2079 65.8633 66.0911 65.5172 66.0911Z" fill="#D3D3D3"/>\n' +
            '<path d="M21.1829 80.9013H20.0937V75.4445H21.1829V80.9013ZM20.0288 73.9989C20.0288 73.7917 20.0813 73.6321 20.1864 73.5203C20.2945 73.4085 20.4475 73.3525 20.6453 73.3525C20.8368 73.3525 20.9852 73.4085 21.0902 73.5203C21.1984 73.6321 21.2525 73.7917 21.2525 73.9989C21.2525 74.1962 21.1984 74.3525 21.0902 74.4676C20.9852 74.5794 20.8368 74.6353 20.6453 74.6353C20.4475 74.6353 20.2945 74.5794 20.1864 74.4676C20.0813 74.3525 20.0288 74.1962 20.0288 73.9989Z" fill="#D3D3D3"/>\n' +
            '<path d="M27.255 80.9012H26.1611V77.5462C26.1611 77.1252 26.0808 76.8111 25.9201 76.6038C25.7625 76.3966 25.5107 76.293 25.1646 76.293C24.7042 76.293 24.3674 76.4377 24.1542 76.7272C23.941 77.0166 23.8343 77.5018 23.8343 78.1827V80.9012H22.7451V75.4444H23.598L23.7509 76.1598H23.8065C23.961 75.8999 24.1804 75.6993 24.4647 75.5579C24.749 75.4164 25.0642 75.3457 25.4103 75.3457C26.6401 75.3457 27.255 76.0118 27.255 77.3439V80.9012Z" fill="#D3D3D3"/>\n' +
            '<path d="M29.8597 80.9013H28.7705V75.4445H29.8597V80.9013ZM28.7056 73.9989C28.7056 73.7917 28.7581 73.6321 28.8632 73.5203C28.9713 73.4085 29.1243 73.3525 29.322 73.3525C29.5136 73.3525 29.6619 73.4085 29.767 73.5203C29.8751 73.6321 29.9292 73.7917 29.9292 73.9989C29.9292 74.1962 29.8751 74.3525 29.767 74.4676C29.6619 74.5794 29.5136 74.6353 29.322 74.6353C29.1243 74.6353 28.9713 74.5794 28.8632 74.4676C28.7581 74.3525 28.7056 74.1962 28.7056 73.9989Z" fill="#D3D3D3"/>\n' +
            '<path d="M33.3318 80.0623C33.5975 80.0623 33.8633 80.0179 34.129 79.9291V80.8023C34.0085 80.8583 33.8524 80.9043 33.6609 80.9405C33.4724 80.98 33.2761 80.9997 33.0722 80.9997C32.0401 80.9997 31.5241 80.4208 31.5241 79.263V76.3224H30.8242V75.8093L31.5751 75.385L31.9459 74.2305H32.618V75.4442H34.078V76.3224H32.618V79.2433C32.618 79.5228 32.6829 79.7301 32.8126 79.8649C32.9455 79.9965 33.1186 80.0623 33.3318 80.0623Z" fill="#D3D3D3"/>\n' +
            '<path d="M36.2376 80.9013H35.1484V75.4445H36.2376V80.9013ZM35.0835 73.9989C35.0835 73.7917 35.136 73.6321 35.2411 73.5203C35.3492 73.4085 35.5022 73.3525 35.7 73.3525C35.8915 73.3525 36.0399 73.4085 36.1449 73.5203C36.2531 73.6321 36.3071 73.7917 36.3071 73.9989C36.3071 74.1962 36.2531 74.3525 36.1449 74.4676C36.0399 74.5794 35.8915 74.6353 35.7 74.6353C35.5022 74.6353 35.3492 74.5794 35.2411 74.4676C35.136 74.3525 35.0835 74.1962 35.0835 73.9989Z" fill="#D3D3D3"/>\n' +
            '<path d="M41.007 80.9012L40.7891 80.1414H40.752C40.5048 80.4736 40.2561 80.7006 40.0058 80.8223C39.7555 80.9407 39.4341 80.9999 39.0417 80.9999C38.538 80.9999 38.1441 80.8552 37.8598 80.5657C37.5786 80.2763 37.438 79.8667 37.438 79.3372C37.438 78.7747 37.6342 78.3504 38.0266 78.0643C38.4191 77.7781 39.017 77.6218 39.8204 77.5955L40.7057 77.5659V77.2748C40.7057 76.9262 40.6284 76.6663 40.4739 76.4953C40.3225 76.321 40.0861 76.2338 39.7648 76.2338C39.5021 76.2338 39.2503 76.2749 39.0093 76.3571C38.7682 76.4394 38.5365 76.5364 38.314 76.6482L37.9617 75.8194C38.2399 75.6648 38.5442 75.548 38.8748 75.469C39.2055 75.3868 39.5176 75.3457 39.8111 75.3457C40.4631 75.3457 40.9544 75.497 41.2851 75.7996C41.6188 76.1022 41.7856 76.5775 41.7856 77.2255V80.9012H41.007ZM39.3847 80.1118C39.7802 80.1118 40.097 79.995 40.3349 79.7615C40.5759 79.5247 40.6964 79.1941 40.6964 78.7698V78.2961L40.0382 78.3257C39.5253 78.3455 39.1514 78.4376 38.9166 78.602C38.6848 78.7632 38.5689 79.0115 38.5689 79.347C38.5689 79.5905 38.6369 79.7796 38.7729 79.9144C38.9088 80.046 39.1128 80.1118 39.3847 80.1118Z" fill="#D3D3D3"/>\n' +
            '<path d="M45.2156 80.0623C45.4813 80.0623 45.747 80.0179 46.0128 79.9291V80.8023C45.8923 80.8583 45.7362 80.9043 45.5446 80.9405C45.3562 80.98 45.1599 80.9997 44.956 80.9997C43.9239 80.9997 43.4079 80.4208 43.4079 79.263V76.3224H42.708V75.8093L43.4589 75.385L43.8297 74.2305H44.5018V75.4442H45.9618V76.3224H44.5018V79.2433C44.5018 79.5228 44.5667 79.7301 44.6964 79.8649C44.8293 79.9965 45.0023 80.0623 45.2156 80.0623Z" fill="#D3D3D3"/>\n' +
            '<path d="M48.1219 80.9013H47.0327V75.4445H48.1219V80.9013ZM46.9678 73.9989C46.9678 73.7917 47.0203 73.6321 47.1254 73.5203C47.2335 73.4085 47.3865 73.3525 47.5842 73.3525C47.7758 73.3525 47.9241 73.4085 48.0292 73.5203C48.1373 73.6321 48.1914 73.7917 48.1914 73.9989C48.1914 74.1962 48.1373 74.3525 48.0292 74.4676C47.9241 74.5794 47.7758 74.6353 47.5842 74.6353C47.3865 74.6353 47.2335 74.5794 47.1254 74.4676C47.0203 74.3525 46.9678 74.1962 46.9678 73.9989Z" fill="#D3D3D3"/>\n' +
            '<path d="M50.852 80.9012L48.9053 75.4443H50.0548L51.0976 78.6168C51.2769 79.1497 51.385 79.5805 51.4221 79.9095H51.4592C51.487 79.6726 51.5951 79.2418 51.7836 78.6168L52.8265 75.4443H53.9853L52.0293 80.9012H50.852Z" fill="#D3D3D3"/>\n' +
            '<path d="M57.0026 80.9999C56.2054 80.9999 55.5812 80.7532 55.1301 80.2598C54.682 79.7631 54.458 79.0806 54.458 78.2123C54.458 77.3209 54.6666 76.6203 55.0837 76.1104C55.5009 75.6006 56.0741 75.3457 56.8033 75.3457C57.48 75.3457 58.0146 75.5644 58.4071 76.0019C58.7995 76.4394 58.9957 77.0413 58.9957 77.8077V78.4343H55.5797C55.5951 78.9639 55.7295 79.3717 55.9829 79.6579C56.2363 79.9408 56.5932 80.0822 57.0536 80.0822C57.3564 80.0822 57.6376 80.0526 57.8972 79.9934C58.1599 79.9309 58.441 79.8289 58.7408 79.6875V80.6299C58.475 80.7647 58.2062 80.8601 57.9343 80.916C57.6624 80.9719 57.3518 80.9999 57.0026 80.9999ZM56.8033 76.2239C56.4573 76.2239 56.1791 76.3407 55.969 76.5742C55.762 76.8078 55.6384 77.1482 55.5982 77.5955H57.925C57.9188 77.1449 57.8169 76.8045 57.6191 76.5742C57.4213 76.3407 57.1494 76.2239 56.8033 76.2239Z" fill="#D3D3D3"/>\n' +
            '<path d="M61.1565 74.6731H61.3876C61.5018 74.6731 61.5931 74.6437 61.6615 74.585C61.7315 74.5249 61.7664 74.4491 61.7664 74.3574C61.7664 74.2501 61.7357 74.1735 61.6744 74.1277C61.613 74.0805 61.516 74.0568 61.3833 74.0568H61.1565V74.6731ZM62.0853 74.3489C62.0853 74.4634 62.0546 74.565 61.9933 74.6537C61.9333 74.7411 61.8484 74.8062 61.7386 74.8491L62.2479 75.6972H61.8884L61.4454 74.9372H61.1565V75.6972H60.8398V73.7842H61.3983C61.6352 73.7842 61.8085 73.8307 61.9184 73.9237C62.0296 74.0168 62.0853 74.1585 62.0853 74.3489ZM59.8232 74.7396C59.8232 74.4534 59.8946 74.185 60.0372 73.9345C60.1799 73.684 60.3761 73.4864 60.6258 73.3419C60.8754 73.1973 61.1444 73.125 61.4326 73.125C61.7179 73.125 61.9854 73.1966 62.2351 73.3397C62.4848 73.4828 62.6816 73.6797 62.8257 73.9302C62.9698 74.1807 63.0419 74.4505 63.0419 74.7396C63.0419 75.0216 62.9727 75.2864 62.8343 75.5341C62.6959 75.7817 62.5019 75.98 62.2522 76.1288C62.0025 76.2777 61.7293 76.3521 61.4326 76.3521C61.1372 76.3521 60.8647 76.2784 60.6151 76.131C60.3654 75.9821 60.1706 75.7838 60.0308 75.5362C59.8924 75.2886 59.8232 75.0231 59.8232 74.7396ZM60.0479 74.7396C60.0479 74.9873 60.11 75.2192 60.2341 75.4353C60.3583 75.65 60.5273 75.8196 60.7413 75.9442C60.9568 76.0673 61.1872 76.1288 61.4326 76.1288C61.6808 76.1288 61.9112 76.0666 62.1238 75.942C62.3364 75.8175 62.5047 75.6493 62.6289 75.4374C62.7544 75.2242 62.8172 74.9916 62.8172 74.7396C62.8172 74.4906 62.7551 74.2594 62.631 74.0461C62.5069 73.8328 62.3385 73.6639 62.1259 73.5394C61.9148 73.4134 61.6837 73.3504 61.4326 73.3504C61.1843 73.3504 60.9539 73.4127 60.7413 73.5372C60.5287 73.6618 60.3597 73.8307 60.2341 74.044C60.11 74.2558 60.0479 74.4877 60.0479 74.7396Z" fill="#D3D3D3"/>\n' +
            '</g>\n' +
            '<rect x="0.5" y="0.5" width="78" height="86" stroke="#D3D3D3"/>\n' +
            '<defs>\n' +
            '<clipPath id="clip0_243_77">\n' +
            '<rect width="57" height="75" fill="white" transform="translate(11 6)"/>\n' +
            '</clipPath>\n' +
            '</defs>\n' +
            '</svg>\n</a><p style="color:lightgrey;margin-top: 0.5vw">Copyright (c) 2023 <a href="https://github.com/jsrac/qionglou/graphs/contributors">Open Source Contributors</a></p></div>'
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})