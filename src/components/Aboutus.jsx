import React from "react";
import '../css/Aboutus.css'

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="hero">

        <div className="hero-text">
          <h1>💙 Medicare Health Platform</h1>
          <p>
            A modern digital healthcare ecosystem connecting patients,
            doctors, pharmacies, and trusted global health partners.
          </p>

          <button className="donate-btn">
            ❤️ Support Our Mission
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt="healthcare"
          />
        </div>

      </div>

      {/* IMPACT STATS */}
      <div className="stats">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Patients Served</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Verified Doctors</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Medical Support</p>
        </div>

      </div>

      {/* PARTNERS */}
      <h2 className="section-title">🤝 Trusted Health Partners</h2>

      <div className="partners">

        <div className="partner-card">
          <img src="https://www.mhinnovation.net/sites/default/files/content/organisation/logo/2025-03/Kenya%20red%20cross%20logo.jpg" alt="redcross" />
          <p>Kenya Red Cross</p>
        </div>

        <div className="partner-card">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAA2FBMVEX////bLSkAAAAYFhYVExMQDQ3YAAD4+PgSEBDbKib7+/sLCAjx8fEGAADaJB8KBgbj4+Pd3d3q6urQ0NDW1tbaIBu7u7vg4ODDw8Orq6v87e2ZmZnIyMiOjo5lZGTZGhSjo6M6OTlAPz9aWVk+PT0xMDC2trbZEwt3d3d/f39MS0v42Nhubm6IiIgmJSVKSUkfHh775+fohILzv77jZGLfREHwsbHrmZjogYD1ysrlc3HpjYzdNTLhWFbgTUrldnTupaTkamjyuLjfSUbvq6riX1zqlZT53d38CiHBAAAXLElEQVR4nO1dd2OiTBM3AwiK2DUau5w1arzkSb1Lvfb9v9E7s7soIM1E0bs3vz8OjiBlmD6zu4nEJz7xiU984hOf+MQn/lE0xl9atM1MGt0ybmrqoZ8oZhS7rXad75oAM9oWAGCItADIVQ/5aLGjBGBAme1OQLmgbRkkqOEWZGjxk9TMoR4vFpQnX9i2CJKk6UwauiBLtG0iLUq47WnGjJ88gUW7cJjnjAETlINT2kkjLSRjSrtVpEFabIlTTF1nxxN5kPTlwR517yjh+3IBQGaQJZiLY0XcDnGbx+0YZE4B05CgmSC6TU4P9cB7QNrShrKs8RftafKCK4i84Ie6oEkDt3QG0ihnJtgfAKa1Qzz2HlCeAQg12BIvnmjnjAlyAL69KnQm0YDOGoptT+F8khhokqSD1PgnbC29XZfvFnB3Qjtzsh4DRVkkEroMdXaE6w2SmQL/ETsT/y8ByBrA+F9QpCArPbE70GQmAV3SCkVkjHbii8J0yAT4X0hmmiRNMjBOaOfQvjQ0QDaBfvMwL7BDzIRaTBANuEQMmVao4b/1WY4Z0ZnBbSvJTJ1JTJf+i9aX+R/VPoif/t0g16HBd/HV2JsL60H6o68pZERNXRuwU5AhGmkUigX7X2tFgcIY/gUTq1hvlkhcKEwtWNbDBEmTmBGdKtz/TPQVmM+5oCSY8QXhrScyJbbpxvnoO8fcMh/cdFaZs8U+d1pGK8GMaE/TmQlNtA25p0vC4RqSUwbQKq4vNoTFX6VEVaeSo1hjzneLwt0Cbj3IskjMiC60XJudgYST8RD3r/qKlEMrAmCWEtYF0KY0YnmLnSC/tHSlwEKYD4QkwzhBBkV4oHXQdGIanR9n6lUS9pSIaMzyYwAtB0vODf0ceazTvyVuywM6Dmn7kcbaBog41DRAhGDjpTnD10Tvkr8/GhdJ2FM0Lky41O4C41rrStqCSPO3BPakH9r2A2QZ+2xvIsLRMSzGrl+p/P3LSBXhm2XwZzywTTSnTMhIpOC0sECKzvb3/DvF1JCcMm2ix2SWC/UBkoKpyACPOl0Ycg5ZexkrLDR+4TH+ZbrTR94bVND457eQR9uo4/dGvXER/TKgIxeYNgcLSSAMTB3WtvZIYX1u5GUZ7PqtSnTQDHB950CkkY0MJKHcFZclVWIZ55U/cqyYwUxYU/xues/+p/x4AYPZcMsLljDGRUeUx2UZZC5kLH6NC0U7Zjc0PwDZAGnOjB8FIW7t+B5kWgqLy4ZMC+k90KCdZiwifLPjBHMSUTag10XxQOdxRxI9xLgMHfcu+esY3BigNVrkmx91pNYiYigYogNMq0VZZpmIXaAwmyROhbJQTfJDZXknXLdHTNEhaLcAcmQ0eijdyu6yUZpu2WkUvyUoXX64UD5SF1TFUAu/Xa0NKOPyKte9EzQN4O4a+bXWZWuoSaBd9P3RIWHZUrV+gUaUlMfuUlGqKd65JFKipEEx4kd9fZyaY21L840lfrNSyPnvAUUpXPZIg2oUx+7jNh8HecdWqFCa7EOWkfeMtrVHAR0l1I8mS+54kN3ZUh/0rWoBowVZqrYhYtzDowbmcE0O8g4tRzkMZ/c3t5fPD6/Pd79/3p9FvRvLBo1FRog2RVFfOjww7sqBjRyo2jQjnGfPru6+J0edSiWLqFQ6o2Tq4SYCPTJopCifTMw3EdIBO/NkPghZIXcTydGucgpgqG30Q3509Ss5qqROHEhlO8mnm3TIL1E/z7n+zFsZw+HR0GLGknKGIAe9Cn65edAv1NvKKHviiVRn9C2KsCw0dgtSmxk0XvKRyEiGyh8l5l4ROWZo7KVAg3876qS8KcFQSX4Ll7CBxpyKDLckjaPJBvOysFqfMmExIFipX6U6AYTg1Bj9DLvnTGRCKGeIlDuetM5SMyh+Vg0Mmihqyvufmn5IBvGEJSmjxxBBaaLHSduSvbI4Cdc1e0eNP9BAgVZhAkEe8XmqEk4JQnZ0FXzPqcESp1R6EQmi0vIoQteprsmkMVl2JcAffovCFII1kr8Db5lB57tXK/VWidUJ5ViPIDA5pSgElEXIaS/JqJQgjO4CL1YAXaH4L8dK0uUlkKraNoe4D6AK02QIiZ1vtyIFEuMh8HLFAeiyAstigjOFDObhopLa2tNWyfEOCc+344oInJEYmlKvgfqyvDg4UyzBXFFD1M8DcLU1KU5OkrdRnmPOmYLHxI2DpLnQ89VhamnKgSJDkEn7+g5SIDHuQx+DMUVOhMZ1sLqG44VJjuaKGqWQGsB1ZAtiR6oT5pC3KJtoMUWiCsFfZG8oXVCRT4cLpijahvHF/9xvoc6mN7K/gp/hwsYUhMHBmjNKU14FoAa7IgQkl/68S0IIyWCfq4SMYG/GGB4wTKuzLhoF3Z5EKyCB8+gTloYjlQ1+gIkriYaMcajgxNTlJeSIGoOADML9u9ni5KQTbEvSzuCnu5B5oBI/KBzIFEyiRpCn9fQuxSkYYxT5adINA6jXK2ZHQ7y4mWPGA6kRFKiff4AtkDFCA3gOtQWMErJoFI0LTRgTNQpgsUPBDGCL13drC8YY36M8UWZOlJDRv8B/Ym3m6mFYNMtbbBGCsw+xBZqS89BbUK8fK/G31EQDlF7oD3YHqt1JAO11o3cQbjZ9i1S20mGoZMNVSeUy5AaFGVFCA6NLfhbGRrHG7sMFUUOXcu3wcxP/OUUkVRmNrp9vf75dXd28XP7KJjshIhQqJHNGCcmypa2QLOPOUWXUkCDC8Dg7W6Qqyevbc4eb/PXnr2RgMvgk+TX4BhnA0H1tPDLtCMy6W1QHFJAYYIZQw2ZFUp3Kb6/3OrvNBlGj8xbyKJPlwVtfawNeBzADS4YrdZEafb/xPyvrH7FUQvIYHt2icUWrtjvXekQNCOwi+ybSvZVKsKPwzTcZmnra9hFbcdXRGnY2qPVRWAMHTXLVmUrehWXgzr/7JMnDYpINtCCuoMR0+nXNfnBzIctcZCvhWZlE+pePnIy2S2S2QDJianjU3c27wU+aQlp0nqJ1FNyNPGmRjNiPwEHthDHFJIVVuxTD6TjE/a+EZrRtuPQkRvLPFs/HSBGTXcmAvObA4UVohrFzkvwW/erPXmKyDS1aEGdAUrVy3sUWFdfDHN5KSAXMhScPL3QLWjBSxOiCt0HOpRNNk8XIOoRk4Tth4YQTZ+4WlS30hVqakIDEOaQXo5+cOaDEr0bdziFnW47S2fnby+/Ly8vfL1fnQe/mUUiJYkfUUgvlFUmhhDnCuwVKiUL1GVg2ovXc/nl5rSRHGJYSOp1R8vvzmy89NtIdkfyLMWuGkVguGmbD+EpGbaI/zKK1mH69/Y6xaMr1ep3ko09v1ka+I/UY4S41VBQGjVWjlA7u9GPwtuolfIN0TlYitnqf/5f00ADsFTujS0/m+ObyP1k8ooY4a0UAbVbPq7VxjrVf6zHUBpDwF/NmPWLr3PlTMig7UUk+e1DDzRg8Tr1+Cs5vDVeRQKm1QIHZf0hSZtLBdFR4ilV9CKQEkiJ75xWPPzt/xfMXN6Pkf5H9z9Nuf5uhbe9DA8DQLB1ldktB1curTlBHEomIz5d2Js5FXgu5JZt8if6kmb2b1nShPkMOZDqb+n0DWvTvgjqSApMZiRP7LyvCbf2BB0ePR9MFL1CszXtIBp3KEX7PdvYjqJzc+R5YJ3VoTysPfksHs5XwrHjsSJca6HiCX/r9LBugKUJ5/d4WoqWuHQdTIdXmg+G07mPFv/rYUYbQ7s1E2qYwVnUzy7wkA4TrCHEWVPaI0nm0bl1JdVYHLcE5Vs7wxnd/AUlF6DtCvbu6QOdldXBFoAiVtKPBL39bmuqEFDs4XqwrpFLrg6uiU2q0VaLrkHjxztSxt6hEIkXizTJCdnl4WDFL9seeHn3XCGhIisgVa0NSebUdvFuzW2eLVNkh8cNfb0YW9PORYCO7+2KjxXYp0HjgkU278ZeQ8HEhFgQtnLSzhyle9aPZpNWoD2ul08wBnNPhwiMw9vcssv9FvjKnRdJJO0eSx8Owgh3LL9MYm9jqCmibnaUvvq53eOPqGowW7vy5o+3LoxOB0q8WZFmJrQVYZX1iHmMD/NkiuoRgiIu0SLqTxo6I7WRjtE1GcASbqs3Qlf0H7fy2rDtKA6Xh5osrX20Rre9K4KZzslFKUJ32KeuR+VOL+XITpFxr0jb7ehwykp+waoDW8yjU/fL1OEdhXRR23HY2o45zF5l9WlRUkI0t7vQhFNpA9RiQvTqB/PvUtiuWP3Q2re9PlyaqeMc1RYhrVqGSCQaVReYZ3auW/earOX2e3AfPHvkyV9/XOph34hS0ePr4Mmz+ryU1zC1zHhNcPfiKSFjTVTg2WM67nFaGqCn6j4JGM3HZuMh5sOKJb2/NNprTE5taueMZuzchUnfhDsDajMHsFmjWiY2/+quLyocDiE2t7LpmuVnOo8dZg7jGqV6g6ZZlHdXnwGOkxr2vRQ3txQuDxyAt10CbCXcvZFnrjSeN7nD/1fbisM3S4DL6F4tJ1Vm39GjxFfhwLHW3mRNJnTjOmBnc4URrz4uJH7xjNJRbfWIPsifOG/72TeIkPzgMzHPsnvOiU84XOV3RyBmPyZokLPbQXJOzeHw8S0Y+eD+3QeW0cBiSQrNWb8zHbfPLkubHhIDhb7tHqTUAZyeKr0n9qBnxHt3qb6fTmXw54qQ9O0PG2ejgO1Lkg7Q4G3na6qNK6KjVdtf+/33xhVcTlxct0sUDzUeXGVLhzFFtv/Olxbatuw48+Jgnl4zUqbAJ03rco3XTXVTbuiRLjqGxAXZk4wrPke/l0wHr0p35BW9SUmJrgBb3RQc0h7Zc0i4cGsodSvp+QsTTdcQ017OvA2cfolhESpD5MCjDFJMTTpij9ZiDZEjU/mJnDH+/c3POl8tOpIyG+uifNLQHqn1dwtBg2GXjreKbPXxC0++WgKjQBcfk1/6zGVQ2Gl5fOifJX6HB633KvxyZtbVW11aTTqQbESbj2BXKvA2fD/drgW6PkH2znZvJBuKhbMhcWunAfhZbqTXRzq1TvQWQ9ZjCdprsrMwaKvN89Qybi+HpHjJsJBt4X0ElGTDP2ktgk9PJyJb7Ansaugr+PTK7xUJjIxJqsCRGnCp2IfFXnvaPyCFS/JXkf555iK+/g+dnc6jOolg+TwApE8+iaMCnhFd5zyAypy049lcYm97WqpKSHXVebxxuU/r85UcybCouu7pAWuRsvx9oMQ2y0hzT47tmmPUfxr/Rd2GnW7aTrDw+/365ubl5+f38NApjCcYWNnZKO3R4GuSwjv0dwdRto3YaTn0RkMHYrIA+ufuiK5HHMhMcoW9P0dZrnlRBC5vra0eo2+7UsJbqW8G/4WCjAvrmX4WOAGeGj2YyWgq/L6PIcc0UgxyY69FtM8MB+TVOyXQ3c6/hSkMl+FC0d8PlyfZB0uCiXs6Xu7S0R1yV9jqg07/sL1gPOlUtVVs0dOb/sTcG6ftbnXBkXWPY1IXozqaaXoyzPsyprKyw8ewsDpraOfLW/wU31KdvCSEcm/5KGwxeYzdiDc6GFARRgnVGDk7Lmd3yf8GNnrP3TMbG4WpSYpxJk8sS2jEvuFqbt9tzntSquZZqCpgpKPXdlVt4jTif58aF7LpHpWrAlKmtcnVYOmDHeH5DPi/9pSR77SSGGtQfHAB781IBvDtBDoCF4l5tKnEdEFteOz/b+6abGtkK1UXQqDZxDLMfm2AVWNc4C/AasydOW7jtrJ6Eir3xq6/ri3qNPULmsBP+orPlsXLQn4BQO+VK63iOVA5E1h7/D8FyOOtL1OUHXJmFRv95Td15HpR3SDrn9njdkhjZ73YxG1gDy9p8QqODEaNIU2DXUGA3/hJIjMqJw9HYjhgVBylOrVzSlPxOJcbsnhukN5voenm0D34NGkyTSv5nj9HvttAZnUeHUqgKrYmkMBb1ae5gK060xUp8+EXyiULdKSnqY1DolU2+2sziz6iTZafcjY5DIG2VRlKw1QXlQ9nWhrVGLC2rTQ6fy8u5DRyRmU3+WK+x8eckkpxsTqFO88m2G5rBSZHoa4dZogb1pmIWh/M+m/9N8sjEf30K/N6pTvLXT4s7vgUPZeVM8bqZG13Q0ruyIEURIoya3QdIb2t8eKZGozNhsGnR3k68q8Ir3rheadE/j8HUSI2u3aFdo0pep0Ez8fE+OnNj/pqYUKduY5mFyct2q+oz2dnNtd8rpirJR8fb3f/yG/rOqLaRIR6yKLloIl+i/swPSyZoyn7eNRSslNsf10vBNv3+ebSxBg0RIvtto2Xgz2Vl89STVHY0etgcpdakRBIZkQxTlybVdw+2ule5VYs28136/vJ6tTYRZTWTyaffPkPw7i9P6NQs5bxSKTo7mX248lKIaRNWq1SzmoikH/v6sgLq+dvtt+fX19fnby9vwcOLzq5e7n5dpzqd7PfH59sr/zrjmIgh0gUtmoAh7lacEGTidPzY/FFWubB4bKtEpgexLgpNq7lD79jG+wtQ4X0Q37OZuixLxvLYOEIAiZGT4/KDZ7QYiyYpUabaPQSGtLBuPNVMWvfu9BSdPS3qqoNxo0lJtz3a+VWcOuRF1KKUi3eutUgoW2t5KnucEq+6StcgV3Rpq14oqDP2db/34RSEDSkutY188K4wB12EXzWQZb7X1hX5yGwJCoewISUydXvxAVVNsdyrrlXjRg16FBUBB1CN5WhdKeqS2ZebwcoxLI02FOu8kQY9jmUyLbBMW3FpKMZpeonyS41t430ojRrxnFgYEsOROkYlsc7MGI42T+SoPQyb+zlJWaokKaKytxtYGqFBuXdyKJjTScHpMSzxtgbNSceF4sKQNYnLby98otPoUMerrG4bJEUiyzqHnKzBkZGCzekv4oIlFTeJHYYbPTsfQBNsC9TS+taM8iVTW46Pz+dEhjVIb7KZVZmnRUpuZ8+ZsV8tQwOajmXpbS8w3zvfXc3C3IL18zY+5CJnul0mhetm3vLebPaO0AQSXkl4WUXScELdnYqmlfdhzEtRpH1WdolyrccagzCU2QAOUUOz6kiE6YfWr//CZ/VAXrD1s06I1EcaqjMUFd0qkhAXG6JGQIWUDwwKnIoZTsZWaYrhwpAgbOXzgyIzsNacwHBJlgz+Egttxc/mtB5VWFZTg5o6v4zqUMaqBF+OmS/wCUUmtkrr4VHZWxkyCyMOpyEX6WOqme7ASurWBpoQu7X6JD1UiHHw0IeA/hbkC31qSbhAh8MKnWoQpjiKze74AqYZyDHFczrPkf0UZfwvQn12YxoFsBM0xAqiVQVVhbx6FybyvjKCVOiznkRF00QI1qdBXPrq96Q+lUR5AF5TbxwpMmt72tCp2mn9AV0Q/1Hm9OI0hYIhUbs9C/sVHaRuW1+pTKSl0qNM0eK4VYUNdVQLVl9d22ZPaflE/367OfGEZs7HBlO1QyqEtUtseNvKfGiyhCJzoALy+5A3LVZogm3y7FbgrOJVUZktC6WCZyskC/M1LQo9ivvafw1TcFhaYaDZ6r0LLcq4jozlR4x5Q3HLogWGqni1xaHKxx9F3b500KnDWRIoboZvuiy6JClN01rRoo4OvvFXiYcDaZBthqMBGz0BxS+oItxZKVO3BtL10LLWumB1Qv194mFDF03imhO+KLLuOkHPUW+Py1uYr4ZUqhJlenUR7w7+WvFgKA3YTI6locoiV/cMR2QrJK+jls9OWWTdiv2PLte9LZjdwLDbHJKIuFJ+DUYL9yDjMqxTmGU27eIx5222BfqOOkttuI5XOV+4XjUDa0+Vlp83/iVaqI0Lylejahi4Vi5fsM4iN/MvZVuitBt1/Zu/BsW6SXNTUA+kPTjL4NHehvu1NiTsnBgeL26o1RkNEnQVdtIehdBJbGPzD4nmJErzOnpVR53M3BkipB7K7UbtX5SMT3ziE5/4xCc+8f+H/wFrtJkqfOpCJgAAAABJRU5ErkJggg==" alt="khan"/>
          <p>Aga Khan Health Services</p>
        </div>

        <div className="partner-card">
          <img src="data:image/png;base64,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" alt="eucerin" />
          <p>Eucerin</p>
        </div>

        <div className="partner-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKij61imvnxN9Brv3s4yctIjQziy97-jnOA&s" alt="dove"/>
          <p>Dove</p>
        </div>

        <div className="partner-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Unilever_EPIMOL_placeholder.png" alt="epimol" />
          <p>Epimol</p>
        </div>

      </div>

      {/* MISSION SECTION */}
      <div className="mission">

        <div className="mission-text">
          <h2>🌍 Our Mission</h2>
          <p>
            We aim to make healthcare accessible, affordable, and intelligent
            through digital transformation, AI-driven triage, and global partnerships.
          </p>
        </div>

        <img
          src="https://img.freepik.com/free-photo/marketing-concept-with-mission-word-flat-lay_176474-9481.jpg?semt=ais_hybrid&w=740&q=80"
          alt="mission"
        />

      </div>

      {/* DONATION SECTION */}
      <div className="donation">

        <h2>💖 Support Healthcare Access</h2>

        <p>
          Your donation helps provide medical care to underserved communities,
          emergency response support, and free consultations.
        </p>

        <div className="donation-box">

          <input type="text" placeholder="Enter amount (KES)" />

          <button>Donate Now</button>

        </div>

      </div>

    </div>
  );
};

export default About;