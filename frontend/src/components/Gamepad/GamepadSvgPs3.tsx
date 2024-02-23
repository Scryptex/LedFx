/* eslint-disable prettier/prettier */
import { useTheme } from '@mui/material'

import Color from 'color'

const GamepadSvgPs3 = ({
  // stroke2 = 'rgba(0,0,0,0.5)',
  // stroke3 = 'rgba(0,0,0,0.8)',
  // fill = 'rgba(0,0,0,0)',
  // strokeOpacity = '1',
  pad,
  type = 'ps3',
  stroke = '#8e8e8f',
  stroke2 = '#49494b',
  strokeWidth = '1',
  strokeWidth2 = '4',
  cover = '#1c1c1e'
}: any) => {
  const theme = useTheme()

  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      width="400px"
      height="400px"
      viewBox="0 0 581.118 581.118"
    >
      <g>
        <g>
          {type === 'ps3' && (
            <path
              id="BTN-PS"
              stroke={stroke}
              fill={
                pad.buttons[16].pressed ? theme.palette.primary.main : stroke
              }
              strokeWidth={strokeWidth}
              style={{ transform: 'scale(0.60)', transformOrigin: 'center' }}
              d="M290.559,264.842c-17.057,0-30.931,13.874-30.931,30.931c0,17.056,13.874,30.93,30.931,30.93    c17.057,0,30.931-13.874,30.931-30.93C321.49,278.716,307.616,264.842,290.559,264.842z M282.621,307.401    c-0.012,0.214-0.447,0.532-0.722,0.581c-4.884,0.82-9.633,0.294-14.247-1.493c-0.398-0.153-0.771-0.392-1.12-0.637    c-1.756-1.242-1.756-2.895,0.043-4.039c0.783-0.502,1.609-0.961,2.479-1.279c4.431-1.634,8.886-3.219,13.568-4.901    c0,1.646,0.031,3.157-0.037,4.669c-0.012,0.208-0.49,0.466-0.795,0.575c-2.454,0.9-4.927,1.757-7.381,2.662    c-0.569,0.209-1.089,0.563-1.628,0.845c0.012,0.135,0.024,0.275,0.031,0.41c0.539,0.189,1.089,0.563,1.616,0.526    c1.518-0.104,3.047-0.281,4.529-0.612c1.199-0.269,2.344-0.802,3.696-1.285C282.652,304.855,282.688,306.134,282.621,307.401z     M292.598,281.446c-0.172,0.404-0.123,0.912-0.123,1.377c-0.006,9.498,0,18.996,0,28.501c0,0.452,0,0.899,0,1.523    c-2.785-0.888-5.374-1.695-7.95-2.546c-0.202-0.067-0.385-0.386-0.447-0.624c-0.08-0.3-0.03-0.643-0.03-0.961    c0.012-11.218,0.024-22.441,0.037-33.66c0-0.392,0-0.783,0-1.321c0.765,0.152,1.432,0.232,2.068,0.416    c3.642,1.064,7.283,2.13,10.9,3.262c0.948,0.294,1.842,0.796,2.717,1.279c2.858,1.585,4.511,4.015,4.921,7.265    c0.281,2.252,0.386,4.492-0.343,6.701c-1.23,3.727-4.67,4.779-8.28,3.06c-0.281-0.135-0.465-0.752-0.465-1.145    c-0.031-3.8,0.012-7.601-0.043-11.401c-0.013-0.753-0.221-1.579-0.594-2.222c-0.227-0.385-0.979-0.691-1.438-0.63    C293.16,280.363,292.787,280.993,292.598,281.446z M314.391,300.301c1.952,1.292,2.044,2.864,0.079,4.131    c-1.218,0.79-2.595,1.365-3.965,1.867c-5.239,1.928-10.509,3.794-15.766,5.679c-0.227,0.08-0.471,0.129-0.881,0.239    c0-1.555-0.043-2.95,0.036-4.339c0.019-0.288,0.466-0.674,0.796-0.796c3.801-1.39,7.613-2.735,11.426-4.095    c0.508-0.177,1.028-0.336,1.493-0.593c0.282-0.153,0.466-0.484,0.698-0.729c-0.264-0.202-0.502-0.515-0.796-0.588    c-1.683-0.422-3.348-0.214-4.963,0.349c-2.467,0.857-4.927,1.738-7.394,2.607c-0.361,0.129-0.729,0.238-1.279,0.41    c0-1.671-0.024-3.194,0.031-4.719c0.006-0.202,0.379-0.495,0.637-0.575c6.45-2.032,12.833-1.971,19.106,0.723    C313.901,299.99,314.152,300.142,314.391,300.301z"
            />
          )}

          <path
            id="Stick-L-Inner"
            fill="#f000"
            d="M200.111,290.032c-18.954,0-34.37,15.423-34.37,34.37s15.416,34.364,34.37,34.364s34.37-15.417,34.37-34.364    S219.065,290.032,200.111,290.032z"
          />
          <path
            id="D-Down"
            fill={type === 'ps3' ? (pad.buttons[13].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            stroke={
              pad.buttons[13].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
            d="M114.003,255.595c-5.043,3.696-10.324,8.09-11.102,9.663c-1.353,2.705-3.244,17.252-2.889,22.24    c0.073,1.053,0.306,4.26,13.972,4.266l0.042,3.06v-3.06c13.666-0.006,13.898-3.213,13.972-4.271    c0.355-4.976-1.53-19.523-2.889-22.234C124.407,263.851,119.682,259.762,114.003,255.595z"
          />
          <path
            id="D-Up"
            fill={type === 'ps3' ? (pad.buttons[12].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            stroke={
              pad.buttons[12].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
            d="M114.003,232.84c5.686-4.167,10.404-8.256,11.108-9.669c1.353-2.699,3.244-17.246,2.889-22.24    c-0.08-1.053-0.306-4.254-13.972-4.26c-13.708,0.006-13.935,3.207-14.015,4.26c-0.355,4.987,1.53,19.535,2.889,22.24    C103.685,224.744,108.96,229.15,114.003,232.84z"
          />
          <path
            id="D-Left"
            fill={type === 'ps3' ? (pad.buttons[14].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            stroke={
              pad.buttons[14].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
            d="M92.962,233.11c-2.46-1.229-14.584-2.925-20.918-2.925c-0.502,0-0.937,0.012-1.31,0.042    c-1.059,0.074-4.266,0.301-4.271,13.966c0.006,13.709,3.213,13.936,4.266,14.009c0.379,0.031,0.82,0.043,1.316,0.043    c6.34,0,18.464-1.688,20.918-2.925c1.671-0.839,6.353-6.573,9.676-11.102C98.936,239.181,94.529,233.893,92.962,233.11z"
          />
          <path
            id="D-Right"
            fill={type === 'ps3' ? (pad.buttons[15].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            stroke={
              pad.buttons[15].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
            d="M157.284,230.234c-0.379-0.031-0.82-0.043-1.316-0.043c-6.34,0-18.464,1.689-20.924,2.925    c-1.566,0.784-5.973,6.065-9.669,11.108c3.317,4.528,7.999,10.27,9.669,11.102c2.46,1.23,14.584,2.925,20.918,2.925    c0.496,0,0.936-0.012,1.31-0.042c1.059-0.074,4.266-0.3,4.271-13.966c0-0.05,0-0.092,0-0.129    C161.525,230.528,158.336,230.301,157.284,230.234z"
          />
          <circle
            id="BTN-Triangle"
            fill={type === 'ps3' ? (pad.buttons[3].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            cx="465.824"
            cy="194.529"
            r="19"
            stroke={
              pad.buttons[3].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={type === 'ps3' ? 0 :strokeWidth2}
          />



          <polygon
            points="465.824,185.529 455.824,204.529 475.824,204.529"
            fill={type === 'ps3' ? (pad.buttons[3].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            stroke={cover}
            strokeWidth={strokeWidth2}
          />
          <circle
            id="BTN-Circle"
            fill="transparent"
            cx="512.446"
            cy="241.152"
            r="19"
            stroke={
              pad.buttons[1].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
          />
          <circle
            id="Inner-Circle"
            fill={type === 'ps3' ? (pad.buttons[1].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            cx="512.446"
            cy="241.152"
            r="13"
            stroke={cover}
            strokeWidth={strokeWidth/2}
          />
          <circle
            id="BTN-X"
            cx="465.824"
            cy="287.774"
            r="19"
            fill={type === 'ps3' ? (pad.buttons[0].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            strokeWidth={strokeWidth2}
            stroke={
              type === 'ps3' ? 'transparent' : pad.buttons[0].pressed ? theme.palette.primary.main : stroke
            }
          />
          {type === 'ps3' && <><line
            x1="455.824"
            y1="277.774"
            x2="475.824"
            y2="297.774"
            stroke={cover}
            strokeWidth={strokeWidth2}
          />
          <line
            x1="475.824"
            y1="277.774"
            x2="455.824"
            y2="297.774"
            stroke={cover}
            strokeWidth={strokeWidth2}
          /></>}
          <circle
            id="BTN-Square"
            fill={type === 'ps3' ? (pad.buttons[2].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            cx="419.202"
            cy="241.152"
            r="19"
            stroke={
              type === 'ps3' ? 'transparent' : pad.buttons[2].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
          />
          {type === 'ps3' && <rect
            x="409.202"
            y="231.152"
            width="20"
            height="20"
            stroke={cover}
            fill={
              pad.buttons[2].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
          />}
          <polygon
            id="BTN-Start"
            fill={type === 'ps3' ? (pad.buttons[9].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            points="333.062,246.586 349.171,241.751 333.062,237.381"
            stroke={
              pad.buttons[9].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
          />
          <rect
            id="L1"
            fill={type === 'ps3' ? (pad.buttons[4].pressed ? theme.palette.primary.main : stroke2) : 'transparent'}
            x="85"
            y="142"
            width="65"
            height="18"
            stroke={
              type === 'ps3' ? 'transparent' : pad.buttons[4].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
            rx="10"
            ry="10"
          />
          <rect
            id="L2"
            fill={type === 'ps3' ? (pad.buttons[6].pressed ? theme.palette.primary.main : stroke2) : 'transparent'}
            x="90"
            y="120"
            width="55"
            height="13"
            stroke={
              type === 'ps3' ? 'transparent' : pad.buttons[6].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
            rx="10"
            ry="10"
          />
          <rect
            id="R1"
            fill={type === 'ps3' ? (pad.buttons[5].pressed ? theme.palette.primary.main : stroke2) : 'transparent'}
            x="433"
            y="142"
            width="65"
            height="18"
            stroke={
              type === 'ps3' ? 'transparent' : pad.buttons[5].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
            rx="10"
            ry="10"
          />
          <rect
            id="R2"
            fill={type === 'ps3' ? (pad.buttons[7].pressed ? theme.palette.primary.main : stroke2) : 'transparent'}
            x="437"
            y="120"
            width="55"
            height="13"
            stroke={
              type === 'ps3' ? 'transparent' : pad.buttons[7].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
            rx="10"
            ry="10"
          />

          <rect
            id="BTN-Select"
            fill={type === 'ps3' ? (pad.buttons[8].pressed ? theme.palette.primary.main : stroke) : 'transparent'}
            x="226.5"
            y="239"
            width="21"
            height="7.711"
            stroke={
              pad.buttons[8].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
          />
          <circle
            id="Stick-L"
            fill={
              Math.abs(pad.axes[0]) > 0.05 ||
              Math.abs(pad.axes[1]) > 0.05
                ? `${Color(theme.palette.primary.main).alpha(
                  Math.abs(pad.axes[0]) + Math.abs(pad.axes[1])
                )}`
                : type === 'ps3' ? (pad.buttons[10].pressed ? theme.palette.primary.main : stroke) : 'transparent'
            }
            cx={200 + pad.axes[0] * 20}
            cy={324 + pad.axes[1] * 20}
            r="31"
            stroke={
              pad.buttons[10].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
          />
          <circle
            id="Stick-R"
            fill={
              Math.abs(pad.axes[2]) > 0.05 ||
              Math.abs(pad.axes[3]) > 0.05
                ? `${Color(theme.palette.primary.main).alpha(
                  Math.abs(pad.axes[2]) + Math.abs(pad.axes[3])
                )}`
                : type === 'ps3' ? (pad.buttons[11].pressed ? theme.palette.primary.main : stroke) : 'transparent'
            }
            cx={381 + pad.axes[2] * 20}
            cy={324 + pad.axes[3] * 20}
            r="31"
            stroke={
              pad.buttons[11].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth={strokeWidth2}
          />
          <path
            id="Pad"
            fill="transparent"
            stroke={stroke}
            strokeWidth={strokeWidth}
            d="M561.234,241.611c-2.441-18.305-10.171-52.075-43.531-75.264l-8.14-31.328c0,0-0.813-7.729-10.985-13.428    c0,0,0.612-5.288-8.745-7.729c-9.357-2.442-31.127-7.117-56.549,1.426c0,0-3.868,1.016-3.66,6.714c0,0-12.001,5.899-14.443,16.885    c-2.441,10.985-5.697,24.816-5.697,24.816h-36.916H211.195h-39.56c0,0-3.256-13.831-5.698-24.816s-14.443-16.885-14.443-16.885    c0.202-5.698-3.66-6.714-3.66-6.714c-25.429-8.543-47.191-3.868-56.549-1.426c-9.357,2.441-8.746,7.729-8.746,7.729    c-10.171,5.698-10.985,13.428-10.985,13.428l-8.14,31.328c-33.36,23.188-41.09,56.959-43.532,75.264    C17.441,259.921,1.579,380.344,0.354,394.58c-1.218,14.241-2.032,67.534,46.788,75.264s74.45-36.615,74.45-36.615l32.956-57.161    c73.636,57.161,108.624-20.545,108.624-20.545h54.774c0,0,34.988,77.706,108.624,20.545l32.956,57.161    c0,0,25.631,44.345,74.45,36.615s48.005-61.028,46.787-75.264C579.546,380.338,563.677,259.916,561.234,241.611z M465.824,168.544    c14.326,0,25.985,11.658,25.985,25.985c0,14.326-11.659,25.985-25.985,25.985c-14.327,0-25.985-11.659-25.985-25.985    C439.839,180.203,451.497,168.544,465.824,168.544z M317.322,191.175c3.776,0,7.552,0,11.322,0    c0.036,0.129,0.049,1.983,0.012,2.265c-0.062,0.006-0.128,0.013-0.195,0.013c-0.386,0-0.777,0-1.163,0    c-0.043,0-0.086,0-0.129,0.006c-0.152,0.024-0.238,0.122-0.208,0.275c0.024,0.116,0.073,0.245,0.141,0.343    c0.116,0.171,0.251,0.324,0.392,0.478c1.114,1.218,2.222,2.43,3.336,3.642c0.03,0.03,0.061,0.055,0.104,0.092    c0.049-0.056,0.099-0.104,0.147-0.153c1.261-1.377,2.515-2.754,3.775-4.131c0.031-0.031,0.062-0.067,0.08-0.104    c0.086-0.128,0.062-0.251-0.056-0.349c-0.098-0.079-0.208-0.098-0.336-0.098c-0.392,0.006-0.79,0-1.182,0    c-0.055,0-0.11-0.013-0.177-0.019c0-0.759,0-1.506,0-2.265c3.06,0,6.113,0,9.18,0c0,0.753,0,1.5,0,2.271c-0.067,0-0.135,0-0.202,0    c-0.746,0-1.493,0-2.233,0c-0.123,0-0.208,0.037-0.294,0.123c-2.411,2.57-4.822,5.141-7.234,7.711    c-0.079,0.086-0.109,0.165-0.109,0.281c0.006,0.991,0,1.977,0,2.969c0,0.042,0,0.085,0.006,0.128    c0.019,0.196,0.116,0.312,0.318,0.337c0.085,0.012,0.171,0,0.263,0c0.839,0,1.677,0,2.516,0c0.024,0,0.049,0.006,0.086,0.012    c0,0.68,0,1.353,0,2.032c-3.709,0-7.405,0-11.114,0c0-0.68,0-1.353,0-2.05c0.073,0,0.141,0,0.208,0c0.716,0,1.426,0,2.142,0    c0.074,0,0.153,0,0.227-0.007c0.232-0.024,0.355-0.159,0.374-0.397c0-0.037,0-0.073,0-0.11c0-1.034,0-2.068,0-3.103    c0-0.122-0.031-0.208-0.117-0.3c-2.282-2.503-4.571-5.007-6.848-7.51c-0.086-0.098-0.178-0.135-0.306-0.135    c-0.833,0.007-1.665,0-2.497,0c-0.067,0-0.135,0-0.215,0C317.322,192.681,317.322,191.935,317.322,191.175z M289.892,191.169    c0.079-0.006,0.159-0.006,0.238-0.006c2.51,0,5.025,0,7.535,0c0.109,0,0.227,0.006,0.336,0c0.135-0.013,0.232,0.03,0.337,0.122    c0.691,0.631,1.383,1.255,2.074,1.879c2.84,2.559,5.674,5.116,8.514,7.675c0.055,0.049,0.11,0.098,0.202,0.178    c0-0.11,0.006-0.184,0.006-0.251c0-2.032,0-4.058,0-6.09c0-0.159,0-0.312,0-0.471c0.006-0.258-0.11-0.441-0.324-0.575    c-0.196-0.123-0.41-0.178-0.643-0.178c-0.704,0-1.402,0-2.105,0c-0.067,0-0.135,0-0.215,0c0-0.766,0-1.506,0-2.252    c0,0,0.007-0.007,0.013-0.013s0.013-0.013,0.013-0.013c3.139-0.006,6.272-0.006,9.412-0.012c0.037,0,0.073,0.006,0.122,0.006    c0,0.753,0,1.506,0,2.276c-0.073,0-0.141,0-0.208,0c-0.679,0-1.353,0-2.031-0.006c-0.569,0-0.82,0.239-0.845,0.814    c-0.007,0.085-0.007,0.177-0.007,0.263c0,4.113,0,8.231,0,12.344c0,0.08,0,0.159,0,0.251c-0.073,0.007-0.122,0.013-0.177,0.013    c-1.065,0-2.13,0-3.195,0c-0.109,0-0.189-0.03-0.269-0.104c-4.07-3.623-8.14-7.239-12.21-10.862    c-0.049-0.043-0.104-0.086-0.184-0.153c0,0.098,0,0.159,0,0.221c0,2.723,0,5.446,0,8.17c0,0.104,0.013,0.214,0.024,0.318    c0.019,0.116,0.092,0.189,0.215,0.208c0.135,0.019,0.275,0.024,0.41,0.024c0.765,0,1.529,0,2.295,0c0.067,0,0.135,0,0.214,0    c0,0.729,0,1.438,0,2.16c-3.17,0-6.328,0-9.504,0c0-0.716,0-1.426,0-2.16c0.073,0,0.141,0,0.208,0c0.697,0,1.389,0,2.087,0    c0.079,0,0.165,0,0.244-0.013c0.245-0.036,0.386-0.195,0.398-0.446c0-0.049,0-0.098,0-0.153c0-3.47,0-6.939,0-10.41    c0-0.049,0-0.098,0-0.152c-0.007-0.294-0.116-0.429-0.398-0.478c-0.135-0.024-0.275-0.037-0.41-0.037    c-0.648-0.006-1.303,0-1.953,0c-0.067,0-0.135,0-0.227,0C289.892,192.565,289.892,191.879,289.892,191.169z M264.072,195.111    c0.661-1.077,1.523-1.965,2.54-2.711c1.383-1.016,2.925-1.701,4.584-2.143c1.646-0.44,3.323-0.6,5.024-0.52    c2.093,0.098,4.101,0.551,5.998,1.456c1.322,0.631,2.515,1.451,3.513,2.534c0.888,0.961,1.549,2.044,1.879,3.316    c0.453,1.708,0.251,3.354-0.544,4.921c-0.661,1.298-1.628,2.338-2.791,3.201c-1.414,1.046-2.993,1.744-4.682,2.185    c-0.979,0.257-1.971,0.416-2.98,0.483c-0.392,0.024-0.79,0.006-1.181,0.006c0,0.006,0,0.013,0,0.019    c-0.508-0.019-1.016-0.006-1.518-0.055c-2.644-0.239-5.098-1.022-7.265-2.589c-1.138-0.82-2.081-1.818-2.76-3.061    c-0.605-1.107-0.912-2.289-0.875-3.55C263.043,197.351,263.417,196.188,264.072,195.111z M240.008,192.565    c0.557-0.562,1.206-0.991,1.909-1.353c1.041-0.532,2.136-0.881,3.274-1.126c1.175-0.251,2.356-0.392,3.562-0.38    c0.937,0.013,1.861,0.123,2.779,0.3c1.322,0.258,2.613,0.637,3.862,1.151c0.25,0.104,0.489,0.244,0.747,0.354    c0.085,0.037,0.189,0.062,0.288,0.056c0.189-0.013,0.245-0.08,0.245-0.275c0-0.19,0-0.386,0-0.576    c0.153-0.042,2.148-0.049,2.369-0.012c0,1.836,0,3.672,0,5.521c-0.765,0-1.518,0-2.289,0c-0.012-0.086-0.018-0.159-0.031-0.239    c-0.092-0.667-0.404-1.218-0.881-1.683c-0.459-0.44-0.998-0.753-1.579-0.998c-0.79-0.343-1.622-0.557-2.466-0.703    c-1.2-0.215-2.412-0.3-3.629-0.264c-0.899,0.031-1.799,0.104-2.681,0.324c-0.361,0.092-0.709,0.208-1.04,0.38    c-0.239,0.122-0.465,0.275-0.643,0.478c-0.208,0.232-0.325,0.502-0.343,0.813c-0.012,0.264,0.08,0.49,0.281,0.643    c0.166,0.129,0.355,0.239,0.545,0.318c0.447,0.196,0.93,0.288,1.414,0.373c0.949,0.166,1.91,0.251,2.871,0.343    c1.53,0.153,3.066,0.294,4.583,0.563c1.175,0.208,2.326,0.478,3.434,0.942c0.698,0.288,1.353,0.648,1.928,1.15    c0.894,0.777,1.396,1.75,1.493,2.932c0.135,1.523-0.392,2.772-1.548,3.764c-0.71,0.606-1.524,1.022-2.393,1.353    c-1.016,0.386-2.068,0.631-3.139,0.796c-0.906,0.135-1.812,0.227-2.729,0.227c-0.563,0-1.126-0.067-1.683-0.159    c-1.818-0.3-3.605-0.729-5.367-1.268c-0.233-0.073-0.459-0.152-0.673-0.275c-0.208-0.122-0.453-0.116-0.71-0.109    c0,0.336,0,0.667,0,1.003c-0.912,0-1.805,0-2.699,0c-0.043-0.128-0.062-5.905-0.019-6.261c0.135-0.036,2.375-0.042,2.564-0.006    c0.024,0.172,0.037,0.343,0.073,0.515c0.141,0.722,0.514,1.31,1.046,1.799c0.594,0.551,1.292,0.924,2.032,1.224    c0.851,0.343,1.738,0.563,2.644,0.71c1.2,0.196,2.411,0.275,3.629,0.227c0.918-0.036,1.817-0.171,2.68-0.52    c0.478-0.19,0.912-0.441,1.285-0.796c0.196-0.184,0.368-0.392,0.496-0.631c0.061-0.109,0.073-0.22,0.049-0.343    c-0.061-0.317-0.232-0.562-0.478-0.765c-0.238-0.195-0.514-0.33-0.802-0.446c-0.575-0.233-1.181-0.367-1.793-0.478    c-1.022-0.189-2.056-0.307-3.084-0.423c-1.475-0.171-2.95-0.324-4.406-0.594c-1.175-0.22-2.338-0.489-3.439-0.979    c-0.667-0.294-1.292-0.667-1.806-1.2c-0.648-0.679-0.967-1.486-0.979-2.423C238.741,194.365,239.194,193.391,240.008,192.565z     M93.911,200.502c0.704-9.938,14.278-9.944,20.067-9.951c5.845,0.007,19.407,0.013,20.123,9.945    c0.379,5.324-1.414,21.224-3.513,25.41c-1.775,3.55-9.804,9.633-14.578,13.036c-0.135,0.122-0.281,0.226-0.447,0.317    c-0.483,0.282-1.022,0.423-1.554,0.423c-0.202,0-0.404-0.024-0.6-0.062c-0.238-0.049-0.471-0.122-0.691-0.22    c-0.263-0.129-0.502-0.275-0.716-0.459c-3.207-2.277-12.663-9.211-14.572-13.036C95.325,221.72,93.525,205.821,93.911,200.502z     M70.288,264.316c-9.938-0.704-9.945-14.278-9.945-20.073c0-5.839,0.006-19.413,9.951-20.117c0.496-0.036,1.083-0.055,1.75-0.055    c5.655,0,19.529,1.506,23.66,3.568c3.825,1.909,10.759,11.377,13.036,14.584c0.202,0.238,0.374,0.508,0.496,0.808    c0.166,0.397,0.245,0.82,0.239,1.236c-0.006,0.452-0.11,0.911-0.318,1.334c-0.116,0.227-0.257,0.44-0.416,0.63    c-1.805,2.559-9.051,12.589-13.036,14.578c-4.125,2.062-18.005,3.568-23.66,3.568C71.377,264.371,70.784,264.353,70.288,264.316z     M134.101,287.927c-0.71,9.944-14.278,9.951-20.067,9.957l0,0h-0.024c-5.82-0.006-19.388-0.013-20.092-9.957    c-0.379-5.312,1.414-21.212,3.513-25.404c1.909-3.819,11.377-10.759,14.578-13.036c0.135-0.116,0.282-0.22,0.441-0.312    c0.232-0.135,0.477-0.239,0.728-0.312c0.795-0.214,1.659-0.128,2.393,0.294c0.196,0.116,0.379,0.251,0.539,0.397    c4.798,3.428,12.723,9.443,14.48,12.963C132.681,266.721,134.48,282.615,134.101,287.927z M155.968,264.371    c-5.649,0-19.529-1.505-23.654-3.567c-3.99-1.989-11.242-12.044-13.036-14.584c-0.128-0.147-0.245-0.318-0.343-0.496    c-0.293-0.532-0.422-1.132-0.385-1.72c0.024-0.373,0.116-0.74,0.281-1.096c0.123-0.257,0.275-0.495,0.459-0.71    c2.295-3.219,9.211-12.649,13.023-14.559c4.131-2.062,18.005-3.568,23.66-3.568c0.661,0,1.254,0.019,1.756,0.055    c9.872,0.704,9.945,14.101,9.945,19.958c0,0.049,0,0.092,0,0.135c-0.006,5.819-0.012,19.394-9.957,20.098    C157.223,264.353,156.629,264.371,155.968,264.371z M200.111,364.892c-22.326,0-40.49-18.164-40.49-40.484    c0-22.325,18.164-40.489,40.49-40.489s40.49,18.164,40.49,40.489C240.607,346.728,222.437,364.892,200.111,364.892z     M253.013,247.712c0,2.692-2.191,4.89-4.89,4.89h-21.358c-2.699,0-4.89-2.19-4.89-4.89v-10.172c0-2.692,2.191-4.89,4.89-4.89    h21.358c2.699,0,4.89,2.191,4.89,4.89V247.712z M290.559,329.756c-18.74,0-33.991-15.244-33.991-33.99    c0-18.745,15.245-33.99,33.991-33.99s33.991,15.245,33.991,33.99C324.55,314.512,309.305,329.756,290.559,329.756z     M332.708,253.08c-0.281,0.092-0.582,0.129-0.882,0.129c-2.692,0-4.89-2.191-4.89-4.891v-12.613c0-2.974,2.858-5.569,5.691-4.785    l26.243,7.123c1.334,0.361,2.258,1.573,2.258,2.95c0,2.509-1.903,4.584-4.339,4.859L332.708,253.08z M381.362,364.892    c-22.326,0-40.49-18.164-40.49-40.484c0-22.325,18.164-40.489,40.49-40.489c22.325,0,40.489,18.164,40.489,40.489    C421.852,346.728,403.688,364.892,381.362,364.892z M419.202,267.137c-14.327,0-25.986-11.658-25.986-25.985    s11.659-25.985,25.986-25.985c14.326,0,25.985,11.658,25.985,25.985C445.182,255.479,433.528,267.137,419.202,267.137z     M465.824,313.759c-14.327,0-25.985-11.658-25.985-25.985s11.658-25.985,25.985-25.985c14.326,0,25.985,11.658,25.985,25.985    C491.804,302.101,480.15,313.759,465.824,313.759z M512.446,267.137c-14.327,0-25.985-11.658-25.985-25.985    s11.658-25.985,25.985-25.985s25.985,11.658,25.985,25.985C538.426,255.479,526.772,267.137,512.446,267.137z"
          />
          <path
            fill="#0000"
            stroke={stroke}
            strokeWidth={strokeWidth}
            d="M270.437,203.63c1.407,0.997,2.993,1.444,4.541,1.462c1.181,0,2.167-0.171,3.103-0.52    c0.067-0.024,0.116-0.074,0.184-0.099c0.012-0.006,0.031,0,0.043-0.006c1.334-0.502,2.466-1.279,3.292-2.454    c1.114-1.579,1.377-3.292,0.704-5.116c-0.472-1.279-1.334-2.265-2.473-2.986c-0.563-0.355-1.138-0.631-1.72-0.839    c-1.806-0.703-3.703-0.74-5.667-0.11c-1.396,0.447-2.577,1.236-3.464,2.412c-1.193,1.585-1.53,3.341-0.888,5.232    C268.527,201.874,269.353,202.859,270.437,203.63z"
          />
          <circle
            id="BTN-PS-COVER"
            fill="transparent"
            cx="290.5"
            cy="296"
            r="34"
            stroke={cover}
            strokeWidth={strokeWidth2}
          />
          {type !== 'ps3' && <rect
            id="SONY-COVER"
            fill={cover}
            x="235"
            y="185"
            width="115"
            height="25"
          />}
          <circle
            id="BTN-PS-RING"
            fill="transparent"
            cx="290.5"
            cy="293.5"
            r="24"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <circle
            id="BTN-PS-RING-INNER"
            fill="transparent"
            cx="290.5"
            cy="293.5"
            r="19"
            stroke={
              pad.buttons[16].pressed ? theme.palette.primary.main : stroke
            }
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  )
}

export default GamepadSvgPs3