const TOKEN_KEY = 'access_token'
export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  return token
}

export const cleanToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
// 求数组的交集合
export const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));
// 当数字超过传入maxNum值，显示maxNum+  
export const outOfNum = (val, maxNum) =>{
  val = val ? val-0 :0;
  if (val > maxNum ) {
      return `${maxNum}+`
  }else{
      return val;
  }
};
export const format = (time, format) => {
  var t = new Date(time);
  var tf = function(i){return (i < 10 ? '0' : '') + i};
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
    switch(a){
      case 'yyyy':
      return tf(t.getFullYear());
      break;
      case 'MM':
      return tf(t.getMonth() + 1);
      break;
      case 'mm':
      return tf(t.getMinutes());
      break;
      case 'dd':
      return tf(t.getDate());
      break;
      case 'HH':
      return tf(t.getHours());
      break;
      case 'ss':
      return tf(t.getSeconds());
      break;
    }
  })
}
export function isAuth(key) {
  return JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}



        /*
                                MMMMM
                                  MMMMMM
                                    MMMMMMM
                                     MMMMMMMM     .
                                      MMMMMMMMM
                                      HMMMMMMMMMM
                                       MMMMMMMMMMMM  M
                                       MMMMMMMMMMMMM  M
                                        MMMMMMMMMMMMM  M
                                        MMMMMMMMMMMMM:
                                        oMMMMMMMMMMMMMM
              .MMMMMMMMMMMMMMo           MMMMMMMMMMMMMMM M
        MMMMMMMMMMMMMMMMMMMMMMMMMMM      MMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMM.  oMMMMMMMMMMMMMMM.M
            MMMMMMMMMMMMMMMMMMMMMMMMMMMM  MMMMMMMMMMMMMMMM
              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM:                     H
                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                  .         MMM
                      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM              M       MMMMMM
                       .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM          M   MMMMMMMMMM
                MM.      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM       M MMMMMMMMMMMM
                    MM    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    .MMMMMMMMMMMMMM
                      MM  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MM MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
               .MMMMMMMMM MMMMMMMMMMMMMMMMMMMMMMMM.MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                  HMMMMMMMMMMMMMMMMMMMMM.MMMMMMMMM.MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                     MMMMMMMMMMMMMMM MMM.oMMMMMMM..MMMMMMMMM:MMMMMMMMMMMMMMMMMMMMMMM
                       MMMMMMMMMMMMMM MM..MMMMMMM...MMMMMMM. MMMMMMMMMMMMMMMMMMMMM
                         MMMMMMMMMMMMMMM ..MMMMMM...MMMMMM ..MMMMMMMMMMMMMMMMMMM
                          MMMMMMM:M.MMM.M.. MMMMM M..MMMMM...MMMMMMMMMMMMMMMMMM  MMM
                            MMMM. .M..MM.M...MMMMMM..MMMMM.. MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM .
                             MMMM..M....M.....:MMM .MMMMMM..MMMMMMM...MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                              MMM.M.. ...M......MM.MMMMM.......MHM.M  .MMMMMMMMMMMMMMMMMMMMMMMMM
                         MMMMMMMM..MM. . MMM.....MMMMMM.M.....M ..MM..M MMMMMMMMMMMMMMMMMMM
                            .MMMMMHMM. ..MMMM. MMM............o..... . .MMMMMMMMMMMMMMM
                               MMM. M... .........................M..:.MMMMMMMMMMMM
                                 oMMM............ .................M.M.MMMMMMMMM
                                    .....MM........................ . MMMMMM
                                   M.....M.....................o.MM.MMMMMMMM.
                                    M........................M.. ...MMMMMMMMMMMMMo
                                      :....MMM..............MMM..oMMMMMMM
                                       M...MMM.............MMMMMMM
                                          .............:MMMMMMMM
                                          M..... MMM.....M
                                          M M.............
                                          ................M
                                       ooM.................MM  MoMMMMMoooM
                                  MMoooM......................MoooooooH..oMM
                              MHooooMoM.....................MMooooooM........M
                            oooooooMoooM......... o........MoooooooM............
                            Mooooooooooo.......M.........Moooooooo:..............M
                           MooMoooooooooM...M........:Mooooooooooo:..............M
                          M..oooooooooooo .........Mooooooooooooooo..............M
                         M...Mooo:oooooooo.M....ooooooooooooooooooo..M...........M
                          ...oooooMoooooooM..Mooooooooooooo:oooooooM.M...........M.
                         M...ooooooMoo:ooooMoooooooooooooHoooooooooH:M. ...........:
                         M..MoooooooMoooooooooooooooooo:ooooooMooooMoM..............M
                         M..ooooooooooMooooooooooooooHoooooooMooHooooM...............M
                         ...ooooooooooooooooooo:MooooooooooooooMoMoooM................
                        M...oooooooooooooooooooooooooooooooooooooMooMM................M
                        ...MooooooooooooooooooooooooooooooooooooooooMo ................
                        ...MooooooooooooooooooooooooooooooooooooooooM M................M
                       M...ooooooooooooooooooooooooooooooooooooooooM   ................M
                       ...MoooooooooooooooooooooooooooooooooooooooMM   .:...............
                       .....MooooooooooooooooooooooooooooooooooooMoo       .............M
                       M...... ooooooooooooooooooooooooooooooooooooM       M..............M
                       M........MooooMMM MM MM  MMMMMMMMMooooooooM         M...............M
                       .........HM     M:  MM :MMMMMM          M           M...............
                      M..........M     M   MoM M                           M................M
                      M.........:M  MoH  M M M MooooHoooMM.   M             M...............M
                      M..........Moooo MMooM    oooooMooooooooM              M..............H
                      M.........MooooM  Mooo  : ooooooMooooMoooM              M........ . .o.M
                      H..  .....ooooo   oooo  M MooooooooooooooM               M... MMMMMMMMMMM
                      MMMMMMMMMMooooM M oooo  .  ooooooMooooooooM              .MMMMMMMMMMMMMMM
                      MMMMMMMMMMooooH : ooooH    oooooooooooooooo               MMMMMMMMMMMMMMM
                      MMMMMMMMMMoooo    ooooM    Moooooooooooooooo              .MMMMMMMMMMMMMMM
                      MMMMMMMMMMoooo    ooooM    MooooooooooooooooM              MMMMMMMMMMMMMMM
                      MMMMMMMMMMoooM    ooooM     ooooooooooooooooo               MMMMMMMMMMM:M
                      MMMMMMMMMMoooM   MooooM     oooooooooooMoooooo               MH...........
                       . ......Mooo.   MooooM     oooooooooooooooooo              M............M
                      M.M......oooo    MooooM     Moooooooooooooooooo:           .........M.....
                      M.M.....Moooo    MooooM      ooooooooooooooooooM            .M............
                      .......MooooH    MooooM      oooooooooMoooooooooo          M..o...M..o....M
                      .o....HMooooM    MooooH      MooooooooMooooooooooM          .:M...M.......M
                     M..M.....MoooM    :oooo:    .MooooooooHooMoooooooooM         M M... ..oM.M
                      M...M.:.Mooo. MMMMooooo   oooooooooooMoooooooooooooM          ....M. M
                       M:M..o.Moooooooooooooo MooooooooooooooMooooooooooooM          .Mo
                              MooooooooooooooMooooooooooooMoMoooooooooooooo
                              Mooooooooooooooo:ooooooooooooooooooooooooooooo
                              ooooooooooooooooMooooooooooMoooooooooooooooooo
                              ooooooooooooooooMoooooooooooMooooooooooooooooHo
                              ooMooooooooooooooMoooooooooooooooooooooooooooMoM
                             MooMoooooooooooooo.ooooooooooooooooooooooooooo:oM
                             MoooooooooooooooooooooooooooooooooooooooooooooooM
                             MoooMooooooooooooooMooooooooooooooooooooooooooooo.
                             MoooMooooooooooooooMoooooooooooooooooooooooooMooooM
                             MooooooooooooooooooMoooooooooooooooooooooooooMoooooM
                             MooooMoooooooooooooMoooooooooooooooooooooooooMoHooooM
                             ooooooMooooooooooooooooooooooooooooooooooooooooMoMoooM
                            MooooooooooooooooooooMooooooooooooooooooooooooooMoooooH:
                            MoooooooMooooooooooooMoooooooooooooooooooooooooooooHoooM
                            MooooooooMoooooooooooMoooooooooooooooooooooooooMoooMooooM
                            Moooooooooooooooooooooooooooooooooooooooooooooo.oooMooooo
                            MoooooooooooooooooooooooooooooooooooooooooooooMoooooooooM
                             MooooooooooooooooooooMoooooooooooooooooooooooooooooooooM
                              MooooooooooooooooooooMHooooooooooooooooooooMoooo:ooooo
                               MMooooooooooooooooooMoMHoooooooooooooooooooooooMooooo
                                MMoooooooooooooooMMooo MMooooooooooooooooooooooooooM
                                MMMoooooooooooooMooooo  oooooooooooooooooooooMooooo
                                MooMMoooooooooMoooMMoM  ooooHooooooooooooooooMooooM
                                MooooMooooooMooooMoooM  MoooooMoooooooooooooMooooo
                                ooooooMMooooooooMooooM  MoooooooooMooooooooooooooM
                                HooooooMoooooooMooooM    HoooooooHooMooooooooooooo
                                 oooMoooooooooHoooM         MoooooooooMoooooooooM
                                  HooooooooooooHM             MooooooooMMoooooooM
                                   MMMMMMMMMMMMMM                Moooooo:MooooHMM
                                    MMMMMMM: ...                  MMMMMMMMMMMMMM
                                   M............M                  MMMMMMMMM ....
                                   M.MM..........                  M.............M
                                M ..............MM                 M..............
                             MMMMM............MMMM                 ..MMMMMMMM ....M
                           MMMMMMMMMMMMMMMMMMMMMMMM               MMMMMMMMMMMMM...M
                        .MMMMMMMMMMMMMMMMMMMMMMMMMM               MMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMM                MMMMMMMMMMMMMMMMMMM
                        :MMMMMMMMMMMMMMMMMMH                     MMMMMMMMMMMMMMMMMMM
                           By EBEN Jérôme                        MMMMMMMMMMMMMMMMMM
                                                                 MMMMMMMMMMMMMMM
                                                                  HMMMMMM
         
        */




        /***
 * ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
 * │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
 * └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
 * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
 * │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
 * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
 * │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
 * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
 * │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
 * ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
 * │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
 * ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
 * │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
 * └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
 */
        /*
                           _ooOoo_
                          o8888888o
                          88" . "88
                          (| -_- |)
                          O\  =  /O
                       ____/`---'\____
                     .'  \\|     |//  `.
                    /  \\|||  :  |||//  \
                   /  _||||| -:- |||||-  \
                   |   | \\\  -  /// |   |
                   | \_|  ''\---/''  |   |
                   \  .-\__  `-`  ___/-. /
                 ___`. .'  /--.--\  `. . __
              ."" '<  `.___\_<|>_/___.'  >'"".
             | | :  `- \`.;`\ _ /`;.`/ - ` : | |
             \  \ `-.   \_ __\ /__ _/   .-` /  /
        ======`-.____`-.___\_____/___.-`____.-'======
                           `=---='
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                 佛祖保佑       永无BUG
        */


        
       /*
        quu..__
         $$$b  `---.__
          "$$b        `--.                          ___.---uuudP
           `$$b           `.__.------.__     __.---'      $$$$"              .
             "$b          -'            `-.-'            $$$"              .'|
               ".                                       d$"             _.'  |
                 `.   /                              ..."             .'     |
                   `./                           ..::-'            _.'       |
                    /                         .:::-'            .-'         .'
                   :                          ::''\          _.'            |
                  .' .-.             .-.           `.      .'               |
                  : /'$$|           .@"$\           `.   .'              _.-'
                 .'|$u$$|          |$$,$$|           |  <            _.-'
                 | `:$$:'          :$$$$$:           `.  `.       .-'
                 :                  `"--'             |    `-.     \
                :##.       ==             .###.       `.      `.    `\
                |##:                      :###:        |        >     >
                |#'     `..'`..'          `###'        x:      /     /
                 \                                   xXX|     /    ./
                  \                                xXXX'|    /   ./
                  /`-.                                  `.  /   /
                 :    `-  ...........,                   | /  .'
                 |         ``:::::::'       .            |<    `.
                 |             ```          |           x| \ `.:``.
                 |                         .'    /'   xXX|  `:`M`M':.
                 |    |                    ;    /:' xXXX'|  -'MMMMM:'
                 `.  .'                   :    /:'       |-'MMMM.-'
                  |  |                   .'   /'        .'MMM.-'
                  `'`'                   :  ,'          |MMM<
                    |                     `'            |tbap\
                     \                                  :MM.-'
                      \                 |              .''
                       \.               `.            /
                        /     .:::::::.. :           /
                       |     .:::::::::::`.         /
                       |   .:::------------\       /
                      /   .''               >::'  /
                      `',:                 :    .'
                                           `:.:'
         
        */