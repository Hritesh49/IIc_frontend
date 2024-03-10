import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { WrapText } from "@mui/icons-material";

export default function UserHome({ userData }) {


  var lin;
  var data = `
EMAIL ID
balpradyumna5@gmail.com
shloke1504@gmail.com
prmohantabtech23@vssut.ac.in
khuntiabswajit@gmail.com
soumyabarik566@gmail.com
sapankumarmohanta304@gmail.com
subhrajit349@gmail.com
ambikaprasaddora@gmail.com
gurjaskabli5@gmail.com
ayushmanmishrasbp@gmail.com
lozlysethy@gmail.com
22ombhai@gmail.com
jitenalok03@gmail.com
harshkumar24academic@gmail.com
bibhuprasadkar40@gmail.com
sudesna724@gmail.com
killamchettyabhilasha@gmail.com
preetamdash2005@gmail.com
pswagatika2004@gmail.com
jani2003.janaki@gmail.com
subhampradhan6237@gmail.com
debashishbhoi89@gmail.com
lipunbehera2005@gmail.com
saisunayanajena@gmail.com 
Siddharthsarangi2005@gmail.com
ayushbiswal720@gmail.com
omkardas319@gmail.com
nayakmahimaprasad66@gmail.com
pknayak.kanha@gmail.com
suhanidash05@gmail.com
jenaasmitbiswas@gmail.com
aryanbhoiaryan@gmail.com
subratsahoo0509@gmail.com
khuntiabswajit@gmail.com
biswaranjan6166@gmail.com
rayayush24@gmail.com
ayushmanmishrasbp@gmail.com
pujaranipanda91@gmail.com
subhampradhan6237@gmail.com
is20044himansubaral@gmail.com
ranjanswain175@gmail.com
yasasman.819@gmail.com
omkardas319@gmail.com
bismitaswain2004@gmail.com
ayushmankar334@gmail.com
sethipriyanka1208@gmail.com
sunandapatra001@gmail.com
debadyasha@gmail.com
thebestoney@gmail.com
dinabandhudash30@gmail.com
routpriya0110@gmail.com   
khuntiabswajit@gmail.com
ayushmantripathy.sbp@gmail.com
twisalenka2005@gmail.com
ayushdash0004@gmail.com
debashishbhoi89@gmail.com
dishadarshita@gmail.com
swetangininayak@gmail.com
adityakumar098k@gmail.com
shibasis275@gmail.com
sahoosnehal09@gmail.com
santanukumarsahu2005@gmail.com
ppdash266@gmail.com
anurag2005om@gmail.com
bishalhota264@gmail.com
ayushmanpattanaik001@gmail.com
rayabhijeet00@gmail.com
mr.piyush.cv@gmail.com
ksumitsekhar@gmail.com
Shloke1504@gmail.com
sanchitabehera2005@gmail.com
bishalprusty166@gmail.com
mohapatraritika58@gmail.com
chinmayaworks666@gmail.com
biswa.jeet.p012@gmail.com
ranbeersinghmcl@gmail.com
sonakshii1806@gmail.com
pratyushkumar1304@gmail.com
sthitijk3001@gmail.com
laxmipriyasahoo1705@gmail.com
anantapanigrahia@gmail.com
aditya170072004@gmail.com
jenasamira20@gmail.com
purna90857@gmail.com
devillegit0@gmail.com
dabulusahoo00@gmail.com
sekharsuman3545@gmail.com
bprava32@gmail.com
neevsanghai@gmail.com
nayakmahimaprasada66@gmail.com
piyushmohanty509@gmail.com
nayakbibhuti489@gmail.com
alpana.mohanty01@gmail.com
ajayakumarputel@gmail.com
riyalinpatel018@gmail.com
satyajitdehury1584@gmail.com
asmitpatel333@gmail.com
kumarpritish2004@gmail.com
dishadarshita@gmail.com
srustisrujanikatripathy2004@gmail.com
laxmipriyaswain2006@gmail.com
hara.prout2004@gmail.com
biswabandhusahoo001@gmail.com
ayushsunny50@gmail.com
anishananda04@gmail.com
senapatiastha2809@gmail.com
dsandhyarani609@gmail.com
akashpanda2025@gmail.com
subodhmeher9876@gmail.com
artatran.mahakud@gmail.com
pradhanankita244@gmail.com
subrajeetpadhy172@gmail.com
sanjivaneemohanty199@gmail.com
swarupp2006@gmail.com
jassijasaswinip2@gmail.com
biswajitmallik3212005@gmail.com
omxavier.2005@gmail.com
ankitdash.755@gmail.com
bishal behra39@gmail.com
sahoosuvendu3251@gmail.com
ansulnanda07@gmail.com
mohantyanwesa28@gmail.com
dhirajagrawal461@gmail.com
souravpradhan388@gmail.com
md9020096@gmail.com
pujaranisahoo732@gmail.com
debadattamahapatra023@gmail.com
mr.piyush.cv@gmail.com
pradhanmohit884@gmail.com
ajay.tripathybgr@gmail.com
sambeet.sabat.2002@gmail.com
vpranati8@gmail.com
radharamanswain022@gmail.com
isthatkaran@gmail.com
kanistha.mallick@gmail.com
pandamonalisa67@gmail.com
lozlysethy@gmail.com
sonalikapatel31@gmail.com
adishree.pattnaik@gmail.com
darshana.puhan04@gmail.com
hellohrishita@gmail.com
nshbiswal7@gmail.com
harmitmohapatra924@gmail.com
bibhuprasadkar40@gmail.com
harshkumar24academic@gmail.com
preetamdash2005@gmail.com
pswagatika2004@gmail.com
jani2003.janaki@gmail.com
sudesna724@gmail.com
subhampradhan6237@gmail.com
debashishbhoi89@gmail.com
ayushzxkumar410@gmail.com
debadyasha@gmail.com
panigrahyayushman@gmail.com
omkarchowdhury14@gmail.com
aniketpalei77@gmail.com
ashutoshsahooomm@gmail.com
bismitaswain2004@gmail.com
debiprasadsahoo2006@gmail.com
lipunbehera2005@gmail.com
kpradhan7219@gmail.com
pradhankiranmayee20442@gmail.com
debashishbarikpvt@gmail.com
soumyabarik566@gmail.com
jhasketan532003@gmail.com
padmaksheesahoo123@gmail.com
smrutisikha1632@gmail.com
killamchettyabhilasha@gmail.com
saisunayanajena@gmail.com
bsushrisanskruti@gmail.com
rajkumardhal234@gmail.com
patradebadutta25@gmail.com
abhijeet1510god@gmail.com
nayakabhisek001@gmail.com
abinashankit64@gmail.com
darshana.puhan04@gmail.com
svmishra2805@gmail.com
allenbal26638@gmail.com
ksibasaktipatro@gmail.com
routraybibekananda8@gmail.com
amanatrout@gmail.com
sunandapatra001@gmail.com
jani2003.janaki@gmail.com
deepansumuni@gmail.com
debaprasadsarangi86@gmail.com
sohantripathy1234@gmail.com
namratamahanta2@gmail.com
imsrm85@gmail.com
gyanar142@gmail.com
roshansa005@gmail.com
killamchettyabhilasha@gmail.com
snehamohapatra415@gmail.com
bsushrisanskruti@gmail.com
shikhanaik03722@gmail.com
jenajyotiprakash741@gmail.com
saisunayanajena@gmail.com
sambitsundarbhutia@gmail.com
shruthikalahasti@gmail.com
gulamalikhan05@gmail.com
sapankumarmohanta304@gmail.com
asutoshpanda524@gmail.com
nirwair2829@gmai.com
starborn097@gmail.com
sanketsahoo40@gmail.com
anweshapanda234@gmail.com
amanatrout@gmail.com
hydravulture@gmail.com
ssuchismita735@gmail.com
harshkumar24academic@gmail.com
aditikar0205@gmail.com
sahudeepakkumar885@gmail.com
adityarajmohapatra2004@gmail.com
sumitswain39@gmail.com
sarabaral351@gmail.com
biswarupaparida234@gmail.com
ansulnanda07@gmail.com
suvam.04.dora@gmail.com
ashutoshgouda72@gmail.com
routpriya0110@gmail.com
sameersahu5766@gmail.com
washiur9861@gmail.com
ssubhranshu16@gmail.com
ayushdash0004@gmail.com
twisalenka2005@gmail.com
subratranjanpanda7@gmail.com
vijaykumar17032005@gmail.com
rahulsingh03007@gmail.com
pranitrout2@gmail.com
gurleenkaurnandra737@gmail.com
samikshapadhy7@gmail.com
debiprasadpradhan109@gmail.com
aurosish18@gmail.com
ayushmantripathy.sbp@gmail.com
ks848009@gmail.com
hellohrishita@gmail.com
manshadas2004@gmail.com
chinmayasahoo100@gmail.com
divyanshi04sahu@gmail.com
ranjanpanda12340@gmail.com
ranjanpanda12340@gmail.com
sankalppanigrahi2000@gmail.com
ipsitananda2005@gmail.com
satabdilenka2005@gmail.com
www.chinmayasahoo100@gmail.com
 `;
var bol = 0;

var h = userData.email;
console.log(h);
var arrobj = [];
var lines = data.split("\n");
var headers = lines[0].split(",");

for (var i = 1; i < lines.length; i++) {
var rowdata = lines[i].split(",");
    arrobj[i] = {};

    for (var j = 0; j < rowdata.length; j++) {
     
      if ( rowdata[j] === h ) {
        console.log(h)
        console.log("found");
        bol = 1;
        if (userData.dpone === "cs") {
          lin = "https://chat.whatsapp.com/IrCwYHB2tebKpX6ZJFYyJV";
        }
        if (userData.dpone === "Chemical" || userData.dpone === "propulsion") {
          lin = "https://chat.whatsapp.com/DAhRkiisqZ14f4a4QaSXrP";
        }
        if (userData.dpone === "electronics") {
          lin = "https://chat.whatsapp.com/IgoZVHNyPwpCJTzLDl2qbO";
        }
        if (userData.dpone === "mechanical") {
          lin = "https://chat.whatsapp.com/KBYI6bREFYCCs1Ff0wnyXS";
        }

        if (userData.dpone === "management") {
          lin = "https://chat.whatsapp.com/CBiTXsnE8qL8oACtcsO1HF";
        }
      }
    }
  }

  /*
     if(userData.dpone==="cs")
     {
      lin="https://iic-168226.learnyst.com/learn/cs-domains"
     }
     if(userData.dpone==="Chemical"|| userData.dpone==="propulsion")
     {
      lin="https://iic-168226.learnyst.com/learn/CHEMICAL-DOMAIN"
     }
     if(userData.dpone==="electronics")
     {
      lin="https://iic-168226.learnyst.com/learn/ELECTRONICS"
     }
     if(userData.dpone==="mechanical")
     {
      lin="https://iic-168226.learnyst.com/learn/mech"
     }

     if(userData.dpone==="management")
     {
      lin="https://iic-168226.learnyst.com/learn/management"
     }

*/

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#021E30",
      }}
    >
      <Stack
        sx={{
          width: { xs: "100%", sm: "85%", md: "80%" },
          height: { xs: "100dvh", sm: "85dvh", md: "90dvh" },
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: ".0625rem .0625rem .625rem .5rem #00000048",
          borderRadius: ".75rem",
          border: { xs: "2px solid white", sm: "none" },
        }}
      >
        <Stack
          sx={{
            background: `url(./iic_logo.png)`,
            height: "100%",
            display: "flex",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: "1",
            width: "100%",
            flex: "1",
            opacity: { xs: "0.1", md: "1" },
            borderRight: { xs: "0px", md: ".25rem solid #021621" },
            position: { xs: "absolute", md: "relative" },
          }}
        ></Stack>
        <Stack
          gap={3}
          sx={{
            color: "whitesmoke",
            flex: "2",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: ".9375rem .625rem",
            zIndex: "2",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bolder",
              borderBottom: ".1875rem solid white",
              paddingBottom: ".125rem",
              fontSize: { xs: "2.8125rem", md: "2.5rem" },
            }}
          >
            Dashboard
          </Typography>
          <Stack
            gap={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              padding: ".625rem .625rem",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxShadow: "1px 1px 8px 4px #00000048",
              borderRadius: ".75rem",
            }}
          >
            <AccountCircleIcon sx={{ fontSize: "4.5rem" }} />
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                alignItems: "flex-start",
                borderRadius: ".75rem",
                padding: ".625rem .625rem",
                textAlign: "start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
              >
                Name : {userData.fname}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Email : {userData.email}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Domain Prefrence 1 : {userData.dpone}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Domain Prefrence 2 : {userData.dptwo}
              </Typography>
            </Stack>
          </Stack>
          {userData.dpone === "graphics" ||
          userData.dpone === "content-writing" ||
          userData.dpone === "video-editing" ? (
            <Link sx={{ color: "#00CED1" }}>Link will be updated soon.</Link>
          ) : (
            <Stack sx={{ width: "100%" }}>
              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: ".75rem",
                  padding: ".625rem .625rem",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "start",
                  boxShadow: "1px 1px 8px 4px #00000048",
                }}
              >
                <Stack
                  gap={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0rem .625rem",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.25rem" } }}
                  >
                    Round 1
                  </Typography>
                  <Button
                   variant="contained"
                    sx={{
                      
                      background: "#00CED1",
                      color: "#021E30",
                      padding: { xs: ".145rem .395rem", md: "6px 12px" },
                      borderRadius: ".75rem",
                      fontSize: { xs: "0.85rem", md: "0.75rem" },
                      textDecoration: "none"
                    }}
                  >
                    PI 1 OVER 
                  </Button>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    padding: "0rem .625rem",
                    fontSize: { xs: "1.05rem", md: "0.95rem" },
                  }}
                >
                  Quiz round
                </Typography>
              </Stack>
              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: ".75rem",
                  padding: ".625rem .625rem",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "start",
                  boxShadow: "1px 1px 8px 4px #00000048",
                }}
              >
                <Stack
                  gap={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0rem .625rem",

                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.25rem" } }}
                  >
                    Round 2
                  </Typography>
                  <Button
                    href=""
                    variant="contained"
                    sx={{
                      background: "#00CED1",
                      color: "#021E30",
                      
                      padding: { xs: ".125rem .375rem", md: "4px 10px" },
                      borderRadius: ".75rem",
                      fontSize: { xs: "1.05rem", md: "0.95rem" },
                    }}
                  >
                    {bol === 1 ? (
                      <a href={lin} style={{ textDecoration: "none" , textWrap: "wrap" ,color:"white" }}>
                        selected,click to join whataspp group
                      </a>
                    ) : (
                      "not selected for pi 2"
                    )}
                  </Button>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    padding: "0rem .625rem",
                    fontSize: { xs: "1.05rem", md: "0.95rem" },
                  }}
                >
                  PI round 1
                </Typography>
              </Stack>
              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: ".75rem",
                  padding: ".625rem .625rem",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "start",
                  boxShadow: "1px 1px 8px 4px #00000048",
                }}
              >
                <Stack
                  gap={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0rem .625rem",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.25rem" } }}
                  >
                    Round 3
                  </Typography>
                  <Button
                    href=""
                    variant="contained"
                    sx={{
                      background: "#00CED1",
                      color: "#021E30",
                      padding: { xs: ".125rem .375rem", md: "4px 10px" },
                      borderRadius: ".75rem",
                      fontSize: { xs: "1.05rem", md: "0.95rem" },
                    }}
                  >
                    Coming Soon
                  </Button>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    padding: "0rem .625rem",
                    fontSize: { xs: "1.05rem", md: "0.95rem" },
                  }}
                >
                  PI round 2
                </Typography>
              </Stack>
            </Stack>
          )}
          <Button
            variant="contained"
            sx={{
              background: "#00CED1",
              color: "#021E30",
              padding: ".25rem .5rem",
              borderRadius: ".75rem",
              fontSize: { xs: "1.125rem", md: "1rem" },
            }}
            onClick={logOut}
          >
            Log out
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
