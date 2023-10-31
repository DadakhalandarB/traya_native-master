import Link from "next/link";

const FooterEndRow = () => {
  return (
    <div>
      <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-5 footer_bottom_part">
        <div className="">
          <div className="footer-lower-row">
            <div className="w-full md:w-9/12 lg:w-9/12 xl:w-9/12 xl:px-[40px] lg:px-[40px] md:px-[40px]">
              <div className="footer-bottom-row">
                <ul className="footer_security_badge px-2">
                  <li>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="22.0613"
                        cy="22"
                        rx="22.0613"
                        ry="22"
                        fill="#B7D340"
                      ></ellipse>
                      <path
                        d="M19.1981 18.9434C20.4559 18.9434 21.4751 17.8963 21.4751 16.6051C21.475 15.313 20.4561 14.2662 19.1985 14.2662C17.9404 14.2662 16.9219 15.3133 16.9219 16.6051C16.9215 17.8966 17.9407 18.9434 19.1982 18.9434H19.1981ZM19.1981 15.4359C19.8268 15.4359 20.3367 15.9594 20.3367 16.6051C20.3367 17.2507 19.8268 17.7743 19.1981 17.7743C18.5695 17.7743 18.0595 17.2507 18.0595 16.6051C18.0595 15.9594 18.5699 15.4359 19.1981 15.4359Z"
                        fill="white"
                      ></path>
                      <path
                        d="M26.2651 14.508L17.048 23.6994C16.5127 24.2333 17.3222 25.0408 17.8578 24.5066L27.0749 15.3151C27.6101 14.7814 26.8005 13.9743 26.2651 14.508Z"
                        fill="white"
                      ></path>
                      <path
                        d="M24.9237 20.0717C23.666 20.0717 22.6467 21.1188 22.6467 22.41C22.6469 23.7021 23.6658 24.7489 24.9234 24.7489C26.1815 24.7489 27.2 23.7018 27.2 22.41C27.2004 21.1186 26.1811 20.0717 24.9237 20.0717H24.9237ZM24.9237 23.5792C24.2951 23.5792 23.7851 23.0557 23.7851 22.41C23.7851 21.7644 24.2951 21.2409 24.9237 21.2409C25.5524 21.2409 26.0623 21.7644 26.0623 22.41C26.0623 23.0557 25.552 23.5792 24.9237 23.5792Z"
                        fill="white"
                      ></path>
                      <path
                        d="M31.9951 29.6743L29.5304 25.4169C30.8231 23.7944 31.5954 21.741 31.5954 19.5078C31.5952 14.2572 27.3261 10 22.061 10C16.7959 10 12.5267 14.2572 12.5267 19.5078C12.5267 21.7408 13.2992 23.7942 14.5917 25.4169L12.1268 29.6743C11.8661 30.0611 12.1843 30.5884 12.6592 30.5212L16.0116 30.0419L17.267 33.1655C17.4279 33.5899 18.0205 33.6495 18.2545 33.2465L20.7554 28.9269C21.1822 28.9853 21.6178 29.0155 22.0607 29.0155C22.5036 29.0155 22.939 28.9855 23.366 28.9269L25.8669 33.2465C26.1007 33.6489 26.6939 33.5908 26.8544 33.1655L28.1098 30.0419L31.4624 30.5212C31.9376 30.5884 32.256 30.0611 31.9954 29.6743H31.9951ZM17.8689 31.7251L16.8685 29.2361C16.7725 28.9975 16.5268 28.8635 16.2825 28.8985L13.6192 29.2787L15.3603 26.2714C16.5259 27.42 17.987 28.2707 19.6198 28.7009L17.8689 31.7251ZM22.0606 27.8644C19.7465 27.8644 17.6512 26.9289 16.1351 25.4169C14.6186 23.9047 13.6807 21.8152 13.6807 19.5078C13.6807 14.8925 17.4325 11.1507 22.0607 11.1507C26.6888 11.1507 30.4406 14.8921 30.4406 19.5074C30.4406 21.8151 29.5025 23.9045 27.9863 25.4165C26.47 26.9287 24.3747 27.8641 22.0607 27.8641L22.0606 27.8644ZM27.8383 28.8983C27.5937 28.8635 27.3482 28.9977 27.2523 29.2359L26.2521 31.7248L24.5011 28.7005C26.1336 28.2707 27.5952 27.4195 28.7607 26.2711L30.5017 29.2784L27.8383 28.8983Z"
                        fill="white"
                      ></path>
                    </svg>
                    <p className="text-[16px]">
                      <span>Safe to use</span>
                    </p>
                  </li>
                  <li>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="22.6599"
                        cy="22"
                        rx="22.0613"
                        ry="22"
                        fill="#B7D340"
                      ></ellipse>
                      <path
                        d="M33.9353 15.1053C33.7848 14.8536 33.458 14.7711 33.2055 14.9213C32.9531 15.0714 32.8704 15.3973 33.0209 15.649C34.3042 17.7953 34.8483 20.3523 34.553 22.8493C34.2486 25.4228 33.1143 27.754 31.2725 29.5904C29.1058 31.7511 26.2252 32.9409 23.1611 32.9409C20.097 32.9409 17.2164 31.7511 15.0497 29.5902C15.0407 29.5813 15.032 29.572 15.0231 29.5629H15.1951C15.489 29.5629 15.7274 29.3252 15.7274 29.0321C15.7274 28.739 15.489 28.5013 15.1951 28.5013L13.7374 28.5014C13.4435 28.5014 13.205 28.7392 13.205 29.0323V30.486C13.205 30.7791 13.4434 31.0168 13.7374 31.0168C14.0313 31.0168 14.2697 30.7791 14.2697 30.486V30.3131C14.2788 30.3224 14.2878 30.3318 14.2971 30.3409C16.6647 32.7021 19.8126 34.0025 23.1614 34.0025C26.5102 34.0025 29.658 32.7021 32.0257 30.3409C34.0383 28.3339 35.278 25.7861 35.6107 22.9733C35.9331 20.2456 35.3383 17.4512 33.9357 15.1052L33.9353 15.1053Z"
                        fill="white"
                      ></path>
                      <path
                        d="M11.8041 19.8824C12.1556 17.4162 13.2778 15.1789 15.0492 13.412C17.2159 11.2514 20.0966 10.0616 23.1607 10.0616C26.0372 10.0616 28.7521 11.1104 30.8662 13.0263H30.7126C30.4187 13.0263 30.1803 13.264 30.1803 13.5571C30.1803 13.8502 30.4187 14.088 30.7126 14.088H32.1703C32.4642 14.088 32.7026 13.8502 32.7026 13.5571V12.1034C32.7026 11.8103 32.4643 11.5726 32.1703 11.5726C31.8764 11.5726 31.638 11.8103 31.638 12.1034V12.2924C29.3194 10.1656 26.3303 9 23.1606 9C19.812 9 16.664 10.3003 14.2963 12.6615C12.3605 14.592 11.134 17.0372 10.7498 19.7327C10.3784 22.3392 10.8521 25.0489 12.084 27.362C12.1796 27.5415 12.364 27.6439 12.5545 27.6439C12.6388 27.6439 12.7241 27.624 12.8038 27.5817C13.0635 27.4442 13.1621 27.1229 13.0243 26.8639C11.8973 24.7475 11.4639 22.2678 11.804 19.8821L11.8041 19.8824Z"
                        fill="white"
                      ></path>
                      <path
                        d="M16.3287 16.7346C15.6382 16.7346 15.0764 17.2948 15.0764 17.9833V25.0195C15.0764 25.7081 15.6382 26.2682 16.3287 26.2682H29.9926C30.683 26.2682 31.2448 25.708 31.2448 25.0195V17.9833C31.2448 17.2947 30.683 16.7346 29.9926 16.7346H16.3287ZM30.1799 20.6353V22.3679C28.7191 22.5965 27.5621 23.7501 27.3331 25.2068H18.9876C18.7583 23.7501 17.6015 22.5965 16.1407 22.3679V20.6353C17.6015 20.4067 18.7585 19.2531 18.9876 17.7964H27.3326C27.562 19.2529 28.7188 20.4067 30.1796 20.6353H30.1799ZM16.3287 17.7962H17.9037C17.7014 18.6662 17.0136 19.3521 16.1412 19.5538V17.9831C16.141 17.8802 16.2252 17.7962 16.3287 17.7962ZM16.141 25.0198V23.4491C17.0134 23.6508 17.7013 24.3367 17.9035 25.2067H16.3285C16.2253 25.2069 16.141 25.1229 16.141 25.0198ZM29.9923 25.2069H28.4173C28.6195 24.3369 29.3073 23.651 30.1798 23.4493V25.0199C30.1799 25.1229 30.0957 25.2069 29.9923 25.2069ZM30.1799 17.9833V19.554C29.3075 19.3523 28.6197 18.6664 28.4174 17.7964H29.9925C30.0957 17.7962 30.1799 17.8802 30.1799 17.9833Z"
                        fill="white"
                      ></path>
                      <path
                        d="M21.4805 23.4888C21.9184 24.0717 22.5151 24.3928 23.1606 24.3928C23.8061 24.3928 24.4028 24.0717 24.8408 23.4886C25.2444 22.9514 25.4666 22.2455 25.4666 21.5007C25.4666 20.7561 25.2444 20.05 24.8408 19.5128C24.4028 18.93 23.8061 18.6089 23.1606 18.6089C22.5151 18.6089 21.9184 18.93 21.4805 19.5131C21.0769 20.0503 20.8547 20.7563 20.8547 21.5011C20.8547 22.2455 21.0769 22.9516 21.4805 23.4888ZM23.1606 19.6705C23.8335 19.6705 24.4021 20.5087 24.4021 21.5009C24.4021 22.4931 23.8335 23.3313 23.1606 23.3313C22.4877 23.3313 21.9192 22.4931 21.9192 21.5009C21.9192 20.5087 22.4877 19.6705 23.1606 19.6705Z"
                        fill="white"
                      ></path>
                    </svg>

                    <p className="text-[16px]">
                      <span>100%</span>
                      <span>Money Back</span>
                    </p>
                  </li>
                  <li>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="22.0613"
                        cy="22"
                        rx="22.0613"
                        ry="22"
                        fill="#B7D340"
                      ></ellipse>
                      <path
                        d="M32.9825 18.75C32.9325 18.6017 32.8034 18.4939 32.6482 18.4708L30.8475 18.1959L30.0411 16.4792H30.0409C29.9732 16.3305 29.8245 16.2353 29.6607 16.2353C29.497 16.2353 29.3483 16.3305 29.2806 16.4792L28.4532 18.2083L26.6524 18.4832C26.4966 18.5059 26.3668 18.6138 26.3166 18.7624C26.2663 18.9112 26.304 19.0755 26.4142 19.1875L27.7303 20.5292L27.4211 22.4334H27.4212C27.3916 22.5937 27.4586 22.7565 27.5925 22.85C27.7231 22.9423 27.8952 22.952 28.0353 22.8749L29.6399 21.9791L31.2444 22.8666C31.3071 22.9005 31.3776 22.9178 31.449 22.9166C31.5343 22.9165 31.6173 22.8902 31.6872 22.8417C31.8212 22.7481 31.8881 22.5854 31.8585 22.425L31.5492 20.5208L32.8653 19.1791H32.8655C32.9841 19.0705 33.0297 18.9036 32.9825 18.75ZM30.8223 20.0874C30.7298 20.1823 30.688 20.3153 30.7094 20.4459L30.9184 21.6959L29.8613 21.1125C29.732 21.0381 29.5727 21.0381 29.4434 21.1125L28.3864 21.7208L28.5953 20.4708C28.6169 20.3402 28.575 20.2074 28.4824 20.1125L27.58 19.1667L28.8042 19C28.9419 18.9778 29.0594 18.8888 29.1176 18.7624L29.6399 17.6458L30.1663 18.75C30.2245 18.8763 30.342 18.9654 30.4796 18.9876L31.6997 19.171L30.8223 20.0874Z"
                        fill="white"
                      ></path>
                      <path
                        d="M26.609 16.526C26.5478 16.3448 26.39 16.2129 26.2002 16.1847L23.9979 15.8487L23.0118 13.7504H23.0115C22.9287 13.5688 22.7469 13.4524 22.5466 13.4524C22.3463 13.4524 22.1645 13.5688 22.0817 13.7504L21.0698 15.8639L18.8675 16.1999C18.6771 16.2277 18.5183 16.3595 18.4569 16.5412C18.3953 16.7231 18.4414 16.9238 18.5762 17.0607L20.1858 18.7006L19.8076 21.028H19.8078C19.7716 21.224 19.8534 21.4229 20.0172 21.5373C20.1769 21.6501 20.3875 21.6619 20.5588 21.5678L22.5211 20.4729L24.4834 21.5576C24.56 21.599 24.6462 21.6201 24.7336 21.6187C24.8379 21.6185 24.9394 21.5865 25.0249 21.5271C25.1887 21.4128 25.2706 21.2138 25.2343 21.0178L24.8561 18.6904L26.4657 17.0505H26.4659C26.611 16.9177 26.6667 16.7138 26.609 16.526ZM23.9671 18.1607C23.854 18.2766 23.8029 18.4392 23.8291 18.5988L24.0846 20.1266L22.7919 19.4136C22.6338 19.3227 22.439 19.3227 22.2809 19.4136L20.9881 20.1571L21.2436 18.6292C21.2701 18.4696 21.2188 18.3073 21.1056 18.1913L20.002 17.0353L21.4991 16.8316C21.6675 16.8045 21.8112 16.6956 21.8824 16.5412L22.5211 15.1764L23.1649 16.526C23.236 16.6804 23.3798 16.7893 23.5481 16.8164L25.0402 17.0405L23.9671 18.1607Z"
                        fill="white"
                      ></path>
                      <path
                        d="M15.8141 16.4914C15.7463 16.343 15.5977 16.2476 15.4339 16.2476C15.2701 16.2476 15.1215 16.343 15.0538 16.4914L14.2472 18.2081L12.4464 18.4831C12.2907 18.5057 12.1609 18.6136 12.1107 18.7623C12.0603 18.9111 12.098 19.0753 12.2082 19.1873L13.5244 20.529L13.2151 22.4332H13.2153C13.1856 22.5935 13.2526 22.7563 13.3865 22.8499C13.5171 22.9421 13.6893 22.9518 13.8293 22.8748L15.4339 21.979L17.0384 22.8665C17.1011 22.9003 17.1716 22.9176 17.2431 22.9165C17.3283 22.9163 17.4113 22.8901 17.4813 22.8415C17.6152 22.748 17.6822 22.5852 17.6525 22.4249L17.3432 20.5207L18.6594 19.179H18.6595C18.7698 19.067 18.8075 18.9027 18.7571 18.7539C18.7069 18.6053 18.5771 18.4974 18.4213 18.4749L16.6206 18.2L15.8141 16.4914ZM16.5954 20.0996V20.0998C16.5029 20.1945 16.4611 20.3275 16.4826 20.4581L16.6915 21.7081L15.6344 21.1248C15.5051 21.0504 15.3458 21.0504 15.2166 21.1248L14.1804 21.7206L14.3893 20.4706C14.411 20.34 14.369 20.2072 14.2765 20.1123L13.3741 19.1665L14.5983 18.9998C14.7359 18.9777 14.8534 18.8886 14.9116 18.7623L15.4339 17.6456L15.9603 18.7498C16.0185 18.8761 16.136 18.9652 16.2737 18.9874L17.4938 19.1708L16.5954 20.0996Z"
                        fill="white"
                      ></path>
                      <path
                        d="M22.537 10C19.6153 9.99907 16.7853 11.016 14.5357 12.875L15.0705 13.5168C17.2889 11.6903 20.104 10.743 22.9786 10.8557C25.853 10.9682 28.5851 12.133 30.6528 14.1274C32.7205 16.1218 33.9788 18.8062 34.1874 21.6674C34.3959 24.5284 33.5403 27.366 31.7835 29.6379C31.3799 28.7922 30.6733 28.1278 29.8031 27.7753C30.2191 27.3949 30.4629 26.8628 30.4791 26.3001C30.4953 25.7374 30.2825 25.192 29.8891 24.7884C29.4958 24.3847 28.9554 24.1569 28.3908 24.1569C27.8263 24.1569 27.2859 24.3847 26.8925 24.7884C26.4992 25.192 26.2863 25.7374 26.3026 26.3001C26.3188 26.8628 26.5626 27.395 26.9785 27.7753C26.0383 28.152 25.2918 28.8934 24.9103 29.8297C24.6557 29.677 24.3871 29.5486 24.1081 29.4463C24.6522 29.012 24.9904 28.3713 25.0415 27.6783C25.0926 26.9852 24.8523 26.3022 24.3779 25.793C23.9036 25.2839 23.2381 24.9946 22.5412 24.9946C21.8443 24.9946 21.179 25.2839 20.7046 25.793C20.2303 26.3021 19.9898 26.9852 20.0411 27.6783C20.0922 28.3713 20.4304 29.012 20.9743 29.4463C20.5695 29.5947 20.1872 29.798 19.838 30.0505C19.4851 29.0166 18.6979 28.1874 17.6819 27.7796C18.1001 27.4002 18.3463 26.8678 18.364 26.3042C18.3817 25.7406 18.1697 25.1939 17.7762 24.789C17.3827 24.384 16.8414 24.1554 16.276 24.1554C15.7104 24.1554 15.1691 24.384 14.7757 24.789C14.3821 25.1939 14.17 25.7406 14.1878 26.3042C14.2055 26.8678 14.4517 27.4002 14.8699 27.7796C14.1136 28.0853 13.4762 28.6258 13.0524 29.3213C11.4764 27.1485 10.699 24.5008 10.8512 21.8232C11.0034 19.1459 12.0759 16.6028 13.8881 14.6213L13.2863 14.0629C11.3451 16.179 10.1925 18.8962 10.0221 21.7591C9.85157 24.622 10.6734 27.4562 12.3499 29.7867C14.0265 32.1171 16.4556 33.8015 19.2295 34.5576C22.0038 35.3138 24.9545 35.0958 27.5865 33.9399C30.2186 32.7838 32.3722 30.7605 33.6858 28.2094C34.9994 25.6581 35.3931 22.7337 34.8013 19.927C34.2092 17.1203 32.6673 14.6023 30.4344 12.7947C28.2015 10.9874 25.4129 10.0006 22.5373 10L22.537 10ZM27.1331 26.25C27.1331 25.9185 27.2651 25.6004 27.5002 25.3661C27.7352 25.1317 28.0542 25 28.3865 25C28.7189 25 29.0379 25.1317 29.2729 25.3661C29.5079 25.6004 29.64 25.9185 29.64 26.25C29.64 26.5814 29.5079 26.8995 29.2729 27.1339C29.0379 27.3682 28.7189 27.4999 28.3865 27.4999C28.0542 27.4999 27.7351 27.3682 27.5002 27.1339C27.2652 26.8995 27.1331 26.5814 27.1331 26.25ZM20.8657 27.5C20.8657 27.058 21.0418 26.6341 21.3551 26.3214C21.6687 26.0089 22.0938 25.8333 22.537 25.8333C22.9802 25.8333 23.4053 26.0089 23.7188 26.3214C24.0322 26.6341 24.2083 27.058 24.2083 27.5C24.2083 27.9419 24.0322 28.3659 23.7188 28.6785C23.4053 28.991 22.9802 29.1666 22.537 29.1666C22.0938 29.1666 21.6687 28.991 21.3551 28.6785C21.0418 28.3658 20.8657 27.9419 20.8657 27.5ZM15.0161 26.25C15.0161 25.9185 15.1482 25.6004 15.3832 25.3661C15.6182 25.1317 15.9372 25 16.2696 25C16.6019 25 16.9209 25.1317 17.1559 25.3661C17.3909 25.6004 17.523 25.9185 17.523 26.25C17.523 26.5814 17.391 26.8995 17.1559 27.1339C16.9209 27.3682 16.6019 27.4999 16.2696 27.4999C15.9372 27.4999 15.6182 27.3682 15.3832 27.1339C15.1482 26.8995 15.0161 26.5814 15.0161 26.25ZM13.6164 30.0375C13.9637 29.2896 14.6123 28.7231 15.4015 28.4782C16.1907 28.2334 17.0469 28.3329 17.7585 28.7522C18.4699 29.1716 18.9704 29.8716 19.1358 30.6791C18.4875 31.3902 18.0797 32.2868 17.9702 33.2416C16.2886 32.526 14.7979 31.4289 13.6164 30.0375ZM18.7764 33.55C18.7764 32.2101 19.4931 30.9722 20.6567 30.3024C21.8202 29.6324 23.2535 29.6324 24.4171 30.3024C25.5807 30.9722 26.2973 32.2101 26.2973 33.55C23.8586 34.3755 21.2151 34.3755 18.7764 33.55ZM27.0953 33.2416C26.9682 32.1298 26.4377 31.1028 25.6038 30.3541C25.8631 29.5731 26.4413 28.9376 27.1956 28.6045C27.95 28.2712 28.8104 28.2712 29.5647 28.6045C30.3191 28.9376 30.8971 29.5731 31.1566 30.3541C30.0286 31.5948 28.6465 32.5795 27.1037 33.2416H27.0953Z"
                        fill="white"
                      ></path>
                    </svg>

                    <p className="text-[16px]">
                      <span>2 Lakh+</span>
                      <span>Customers</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 footer_contact_info xs:px-5 xs:py-5">
              <div className="flex justify-start xl:justify-end lg:justify-end md:justify-end">
                <div className="w-11/12 xl:w-5/12 footer_social_whatsapp flex justify-between">
                  <div className="w-7/12 xl:hidden lg:hidden md:hidden fsocial-icon flex  no-underline  justify-between items-center ">
                    <ul className="flex justify-between w-full">
                      <li>
                        <Link
                          href="https://www.instagram.com/traya.health/"
                          aria-describedby="a11y-new-window-external-message"
                          rel="null noopener"
                          className="decoration-none no-underline"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.89589 0.00131111L10.5157 0.000475308C12.6422 0.000206814 14.3922 1.74401 14.3925 3.86558L14.3933 10.4331C14.3936 12.5538 12.6449 14.299 10.5175 14.2992L3.8977 14.3001C1.77116 14.3003 0.0211164 12.5565 0.0208485 10.435L0.0200193 3.86739C0.0197516 1.74676 1.76842 0.00157972 3.89589 0.00131111ZM11.065 2.49764C11.5105 2.49758 11.8882 2.87414 11.8882 3.31836C11.8883 3.76259 11.5107 4.13924 11.0652 4.13929C10.5849 4.13936 10.2421 3.76279 10.242 3.31857C10.242 2.87435 10.5847 2.4977 11.065 2.49764ZM7.18876 3.2504L7.22267 3.25039C9.3492 3.25012 11.1332 5.02867 11.1334 7.1493C11.1337 9.30374 9.35019 11.0489 7.22365 11.0492L7.18974 11.0492C5.06321 11.0495 3.31317 9.30567 3.31289 7.15029C3.31263 5.02966 5.06128 3.25067 7.18876 3.2504ZM7.18893 4.58401L7.22284 4.584C8.62891 4.58383 9.79592 5.74636 9.79609 7.14947C9.79627 8.58639 8.63051 9.74922 7.22349 9.7494L7.18958 9.7494C5.7835 9.74958 4.61649 8.58704 4.61631 7.15013C4.61613 5.74796 5.78191 4.58419 7.18893 4.58401ZM3.92995 1.23255L10.481 1.23172C11.9558 1.23154 13.1567 2.42882 13.1569 3.89954L13.1577 10.3985C13.1579 11.8693 11.9573 13.0669 10.4825 13.067L3.93145 13.0679C2.45662 13.0681 1.2557 11.8708 1.25551 10.4001L1.25469 3.90105C1.25451 2.43032 2.45513 1.23274 3.92995 1.23255Z"
                              fill="#414042"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://www.facebook.com/traya.health/"
                          aria-describedby="a11y-new-window-external-message"
                          rel="null noopener"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 8 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.38992 14.2997H5.1676V7.91012H7.21951L7.63007 5.32858H5.1676V3.37657C5.1676 2.65283 5.86247 2.24341 6.52466 2.24341H7.72454V0.10298L5.57815 0.00876927C3.52624 -0.117138 2.38992 1.48796 2.38992 3.40827V5.32858H0.0537109V7.91012H2.38992V14.2997Z"
                              fill="#414042"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://www.linkedin.com/company/trayahealth"
                          aria-describedby="a11y-new-window-external-message"
                          rel="null noopener"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.993156 4.83784H3.83995V14.3694H0.993156V4.83784ZM2.39854 0.00183105C3.34747 0.00183105 4.12059 0.772804 4.12059 1.7191C4.12059 2.66539 3.34747 3.43637 2.39854 3.43637C1.4496 3.43637 0.711426 2.66539 0.711426 1.7191C0.711426 0.772804 1.4496 0.00183105 2.39854 0.00183105ZM5.52597 4.83784H8.33672V6.16963C8.93404 5.29303 9.91791 4.7333 11.0427 4.7333H11.8158C13.6077 4.7333 15.0491 6.20556 15.0491 7.95768V14.3705H12.2384V13.4939V9.21868C12.2034 8.13191 11.4652 7.29124 10.3755 7.29124C9.28565 7.29124 8.37276 8.13191 8.33782 9.21868V14.3705H5.52706V4.83893L5.52597 4.83784Z"
                              fill="#414042"
                            ></path>
                          </svg>
                        </Link>
                      </li>

                      <li className="">
                        <Link
                          href="https://twitter.com/TrayaHealth?t=I0O9cO7MJi-iIHiVSqI9qg&amp;s=09"
                          aria-describedby="a11y-new-window-external-message"
                          rel="null noopener"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.79045 4.39915C8.09375 0.710068 12.5092 -1.48384 15.1117 1.17703C15.1117 1.17703 16.2732 0.849814 17.2968 0.196527C17.2968 0.196527 16.9247 1.45766 15.6704 2.25069C15.6704 2.25069 17.0649 2.06436 17.6689 1.69057C17.6689 1.69057 17.0649 2.95169 15.9486 3.41865C16.5526 11.8705 7.48866 17.0059 0.14502 12.8044C0.14502 12.8044 3.77104 12.9907 5.30468 11.2172C5.30468 11.2172 3.07321 11.4035 1.95803 8.69608C1.95803 8.69608 2.79497 9.02329 3.63078 8.60291C3.63078 8.60291 1.02834 8.18254 0.79535 5.05471C0.79535 5.05471 1.6323 5.708 2.56199 5.47509C2.56199 5.47509 -0.319823 3.747 1.30657 0.619176C1.30657 0.619176 4.37386 4.54117 8.79045 4.40142V4.39915Z"
                              fill="#414042"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://www.youtube.com/@TrayaHealth"
                          aria-describedby="a11y-new-window-external-message"
                          rel="null noopener"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 22 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.8402 0.240402C6.8302 0.0818076 9.17768 0.00183105 10.9692 0.00183105C12.7594 0.00183105 15.0675 0.0818076 17.0982 0.240402C19.4457 0.438307 20.6406 0.835468 20.9586 3.17644C21.1177 4.24729 21.1979 5.71666 21.1979 7.22399C21.1979 8.73268 21.1177 10.24 20.9586 11.2716C20.6406 13.6532 19.4457 14.0097 17.0982 14.2076C15.0688 14.4055 12.7608 14.4462 10.9692 14.4462C9.17904 14.4462 6.8302 14.4069 4.8402 14.2076C2.49271 14.0097 1.25847 13.6518 0.940394 11.2716C0.820777 10.24 0.741943 8.73132 0.741943 7.22399C0.741943 5.71531 0.822136 4.24729 0.940394 3.17644C1.25847 0.835468 2.49271 0.438307 4.8402 0.240402Z"
                              fill="#414042"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.90036 4.1701L14.2328 7.22543L8.90036 10.3201V4.1701Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-4/12 whatsapp-list-icon">
                    <Link
                      href="https://wa.me/918828006272?text=Hey%21+I+would+like+to+know+more+about+Traya"
                      aria-describedby="a11y-new-window-external-message"
                      rel="null noopener"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        borderBottom: "0px",
                      }}
                    >
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="27" cy="27" r="27" fill="#F4F4F2"></circle>
                        <rect
                          x="10"
                          y="10"
                          width="34"
                          height="34"
                          fill="url(#pattern0)"
                        ></rect>
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_1_85"
                              transform="scale(0.00277778)"
                            ></use>
                          </pattern>
                          <image
                            id="image0_1_85"
                            width="360"
                            height="360"
                            xlinkHref="data:image/png;base64,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"
                          ></image>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEndRow;
