import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { WrapText } from "@mui/icons-material";

export default function UserHome({ userData }) {
  var lin;
  var data = `
Email
sjyotiranjan408@gmail.com
routpriya0110@gmail.com   
khuntiabswajit@gmail.com
ayushmantripathy.sbp@gmail.com
twisalenka2005@gmail.com
ayushdash0004@gmail.com
debashishbhoi89@gmail.com
dishadarshita@gmail.com
swetangininayak@gmail.com
chemical
jyotiranjansahoovssut.ac.in
balpradyumna5@gmail.com
adityakumar098k@gmail.com
patradebadutta25@gmail.com
abhijeet1510god@gmail.com
nayakabhisek001@gmail.com
srustisrujanikatripathy2004@gmail.com
abinashankit64@gmail.com
darshana.puhan04@gmail.com
svmishra2805@gmail.com
allenbal26638@gmail.com
ksibasaktipatro@gmail.com
subhrajit349@gmail.com
parthasarathisamal333@gmail.com
routraybibekananda8@gmail.com
swarupsdash21@gmail.com
sanjeebmohapatra2004@gmail.com
kumarpritish2004@gmail.com
amanatrout@gmail.com
sanvipradhan31@gmail.com
sunandapatra001@gmail.com
bs554937@gmail.com
jani2003.janaki@gmail.com
senapatiastha2809@gmail.com
dsandhyarani609@gmail.com
pradhansumit1903@gmail.com
deepansumuni@gmail.com
sahooommprakash58@gmail.com
chinmayaworks666@gmail.com
debaprasadsarangi86@gmail.com
sohantripathy1234@gmail.com
namratamahanta2@gmail.com
imsrm85@gmail.com
bkparida643@gmail.com
sudesna724@gmail.com
gyanar142@gmail.com
sahoosnehal09@gmail.com
lipunbehera2005@gmail.com
roshansa005@gmail.com
killamchettyabhilasha@gmail.com
snehamohapatra415@gmail.com
bsushrisanskruti@gmail.com
biswaranjan6166@gmail.com
saisunayanajena@gmail.com
sambitsundarbhutia@gmail.com
snehasharma5476@gmail.com
shruthikalahasti@gmail.com
gulamalikhan05@gmail.com
sapankumarmohanta304@gmail.com
asutoshpanda524@gmail.com
swagatjalli909@gmail.com
www.chinmayasahoo100@gmail.com
shikhanaik03722@gmail.com
pkrishnapriyadarshini@gmail.com
cs
ppdash266@gmail.com
anurag2005om@gmail.com
alpana.mohanty01@gmail.com
pujaranipanda91@gmail.com
ankitikumarbiswal2005@gmail.com
bishalhota264@gmail.com
Kumarn43753@gmail.com
b.debasispatra@gmail.com
subhrajit349@gmail.com
subhankarpatra2118@gmail.com
ayushmanpattanaik001@gmail.com
ksumanpatra06@gmail.com
rayabhijeet00@gmail.com
asmitpatel333@gmail.com
nbrk0905@gmail.com
abhijitsince2005@gmail.com
mahantas025@gmail.com
mr.piyush.cv@gmail.com
ksumitsekhar@gmail.com
biswajitpanda264@gmail.com
nandurajiv76@gmail.com
sanchitabehera2005@gmail.com
ansumanjena996@gmail.com
bishalprusty166@gmail.com
mohapatraritika58@gmail.com
tanmayadhaundia@gmail.com
chinmayaworks666@gmail.com
biswa.jeet.p012@gmail.com
ranbeersinghmcl@gmail.com
gcxixii0992@gmail.com
bkparida643@gmail.com
sonakshii1806@gmail.com
laibajamil0123@gmail.com
sudesna724@gmail.com
sthitijk3001@gmail.com
ambritarout92@gmail.com
singhbikram1204@gmail.com
ashutosh123panda84@gmail.com
80rupeshpradhan@gmail.com
cs172668@gmail.com
aditya170072004@gmail.com
jenasamira20@gmail.com
shivangisahu7354disha@gmail.com
swastik4950@gmail.com
purna90857@gmail.com
devillegit0@gmail.com
priyadarshani13022005@gmail.com
dabulusahoo00@gmail.com
sekharsuman3545@gmail.com
pratyushkumar1304@gmail.com
ayushkishan3435@gmail.com
arjuntarbha90@gmail.com
aditya17072004@gmail.com
bprava32@gmail.com
neevsanghai@gmail.com
mang
pritipriyadarsini09@gmail.com
bibhuprasadkar40@gmail.com
sanketsahoo40@gmail.com
nayakabhisek001@gmail.com
srustisrujanikatripathy2004@gmail.com
jitenalok03@gmail.com
siddharthsarangi2005@gmail.com
anweshapanda234@gmail.com
shilpyofficial001@gmail.com
subhrajit349@gmail.com
laxmipriyaswain2006@gmail.com
pujaranisahoo732@gmail.com
priyadarshinilipsa453@gmail.com
pradhanankita244@gmail.com
subhankarmohapatra935@gmail.com
kumarpritish2004@gmail.com
amanatrout@gmail.com
hydravulture@gmail.com
ayushsunny50@gmail.com
anishananda04@gmail.com
mr.piyush.cv@gmail.com
biswajitpanda264@gmail.com
subodhmeher9876@gmail.com
harshkumar24academic@gmail.com
pradhanmohit884@gmail.com
aditikar0205@gmail.com
smrutiranjannanda57@gmail.com
chinmayaworks666@gmail.com
sahudeepakkumar885@gmail.com
ritishvicky07@gmail.com
adityarajmohapatra2004@gmail.com
sumitswain39@gmail.com
bkparida643@gmail.com
pknayak.kanha@gmail.com
sarabaral351@gmail.com
biswarupaparida234@gmail.com
subhransupradhan1806@gmail.com
patelsuryaansh2@gmail.com
ansulnanda07@gmail.com
suvam.04.dora@gmail.com
ayushzxkumar410@gmail.com
amlansubudhi08@gmail.com
panchamartya416@gmail.com
aniketpalei77@gmail.com
rajkumardhal234@gmail.com
sameersahu5766@gmail.com
mamatapanda613@gmail.com
washiur9861@gmail.com
rayayush24@gmail.com
satyajitsatapathy1212@gmail.com
ssubhranshu16@gmail.com
ayushdash0004@gmail.com
twisalenka2005@gmail.com
samanaskumar243@gmail.com
subratranjanpanda7@gmail.com
vijaykumar17032005@gmail.com
rahulsingh03007@gmail.com
megha.priyadarsini0604@gmail.com
pranitrout2@gmail.com
10sujitkumarsha@gmail.com
gurleenkaurnandra737@gmail.com
samikshapadhy7@gmail.com
debiprasadpradhan109@gmail.com
electronics
Email
samirpadhan773@gmail.com
prithivrajavinash@gmail.com
piyushmohanty509@gmail.com
nayakbibhuti489@gmail.com
ritikjena22@gmail.com
alpana.mohanty01@gmail.com
anantapanigrahia@gmail.com
dasomkar405@gmail.com
sethiharamohan8@gmail.com
ankitikumarbiswal2005@gmail.com
samartya863@gmail.com
Kumarn43753@gmail.com
subhrajit349@gmail.com
sthytipragyansahu@gmail.com
bshreyasahoo14@gmail.com
ajayakumarputel@gmail.com
riyalinpatel018@gmail.com
satyajitdehury1584@gmail.com
asmitpatel333@gmail.com
kumarpritish2004@gmail.com
nayakrudrapratap04@gmail.com
biswabandhusahoo001@gmail.com
nandinisahu.mm@gmail.com
ayushsunny50@gmail.com
anishananda04@gmail.com
somyajena800800@gmail.com
senapatiastha2809@gmail.com
dsandhyarani609@gmail.com
akashpanda2025@gmail.com
biswajitpanda264@gmail.com
bishalbehera39@gmail.com
shibasahoo417@gmail.com
vpranati8@gmail.com
sunilkumarbehera2004@gmail.com
bhavitabyadhal@gmail.com
subodhmeher9876@gmail.com
samratsubudhi7@gmail.com
chinmayaworks666@gmail.com
ritishvicky07@gmail.com
barsharanikanta44k@gmail.com
subrajeetpadhy172@gmail.com
bkparida643@gmail.com
eshaanbilung577@gmail.com
swayamshree4002@gmail.com
Ashutoshlenka42@gmail.com
sanjivaneemohanty199@gmail.com
swarupp2006@gmail.com
jassijasaswinip2@gmail.com
biswajitmallik3212005@gmail.com
subhransupradhan1806@gmail.com
ankitdash.755@gmail.com
sudesna724@gmail.com
sahoosuvendu3251@gmail.com
ansulnanda07@gmail.com
mohantyanwesa28@gmail.com
amritkusahoo@gmail.com
dhirajagrawal461@gmail.com
souravpradhan388@gmail.com
amlansubudhi08@gmail.com
md9020096@gmail.com
nksohan10@gmail.com
rajkumardhal234@gmail.com
jenasamira20@gmail.com
manshadas2004@gmail.com
rasabiharimeher10@gmail.com
samanaskumar243@gmail.com
ajay.tripathybgr@gmail.com
rahulsingh03007@gmail.com
ashutosh04022022@gmail.com
aniketnayakmr360@gmail.com
purna90857@gmail.com
sapankumarmohanta304@gmail.com
asutoshpanda524@gmail.com
dasshubhankar731@gmail.com
ritishdot1793@gmail.com
isthatkaran@gmail.com
achyutadevraj9439@gmail.com
kanistha.mallick@gmail.com
pandamonalisa67@gmail.com
lozlysethy@gmail.com
mech
samirpadhan773@gmail.com
prithivrajavinash@gmail.com
siddharthsarangi2005@gmail.com
sankalppanigrahi2000@gmail.com
sahinsanaik2004@gmail.com
darshana.puhan04@gmail.com
anantapanigrahia@gmail.com
hellohrishita@gmail.com
divyanshi04sahu@gmail.com
Kumarn43753@gmail.com
om.xavierburla2005@gmail.com
palbuddhadev01@gmail.com
nayakrudrapratap04@gmail.com
satabdilenka2005@gmail.com
nshbiswal7@gmail.com
pradhansumit1903@gmail.com
harmitmohapatra924@gmail.com
bhavitabyadhal@gmail.com
sahooommprakash58@gmail.com
abhipsaa2005@gmail.com
ks848009@gmail.com
ritikkujur441@gmail.com
harshkumar24academic@gmail.com
ompanigrahi789@gmail.com
smrutiranjannanda57@gmail.com
satyajitjenalan@gmail.com
richardsyiem963@gmail.com
preetamdash2005@gmail.com
satyasundarlenka94@gmail.com
sumitswain39@gmail.com
subhammahapatra720@gmail.com
maheswarchikusam175@gmail.com
ayushbiswal720@gmail.com
omkardas319@gmail.com
nayakmahimaprasad66@gmail.com
pknayak.kanha@gmail.com
suhanidash05@gmail.com
jenaasmitbiswas@gmail.com
aryanbhoiaryan@gmail.com
subratsahoo0509@gmail.com
mohantyanwesa28@gmail.com
biswaranjanbiswalbabu@gmail.com
osahoo579@gmail.com
biswalsritam146@gmail.com
ayushzxkumar410@gmail.com
debadyasha@gmail.com
panigrahyayushman@gmail.com
omkarchowdhury14@gmail.com
aniketpalei77@gmail.com
apssarangi18@gmail.com
prmohantabtech23@vssut.ac.in
tanay333666999@gmail.com
ashutoshsahooomm@gmail.com
rounakpadhan@gmail.com
sameersahu5766@gmail.com
pratyushsahoo88518@gmail.com
ayushmankar334@gmail.com
bismitaswain2004@gmail.com
debiprasadsahoo2006@gmail.com
sahooratnakar312@gmail.com
khuntiabswajit@gmail.com
biswaranjan6166@gmail.com
rayayush24@gmail.com
ayushmanmishrasbp@gmail.com
kpradhan7219@gmail.com
lembudharchapeyar@gmail.com
pradhankiranmayee20442@gmail.com
debashishbarikpvt@gmail.com
soumyabarik566@gmail.com
ashutosh04022022@gmail.com
jhasketan532003@gmail.com
bhoiarpita7@gmail.com
bhababhutiparida@gmail.com
padmaksheesahoo123@gmail.com
renuka3346o@gmail.com
smrutisikha1632@gmail.com
soyamsankalpdn@gmail.com
nshbiswal8@gmail.com
killamchettyabhilasha@gmail.com
saisunayanajena@gmail.com
bsushrisanskruti@gmail.com
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
     
      if (rowdata[j] == h ) {
        console.log(h);
        console.log("found");
        bol = 1;
        if (userData.dpone === "cs") {
          lin = "https://chat.whatsapp.com/LGm3wQDhiZQ3FBalGwCzJi";
        }
        if (userData.dpone === "Chemical" || userData.dpone === "propulsion") {
          lin = "https://chat.whatsapp.com/LJEPKGkIa2g7XHGidXmys2";
        }
        if (userData.dpone === "electronics") {
          lin = "https://chat.whatsapp.com/BbgHzCWs57rBiCOuJiKwz1";
        }
        if (userData.dpone === "mechanical") {
          lin = "https://chat.whatsapp.com/E8MFcp1Mjqa6JtuklWvjdD";
        }

        if (userData.dpone === "management") {
          lin = "https://chat.whatsapp.com/Imzw9Jtz3HJ0tWSANFqmZd";
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
                    {bol === 1 ? (
                      <a href={lin} style={{ textDecoration: "none" , textWrap: "wrap" }}>
                        selected,click to join whataspp group
                      </a>
                    ) : (
                      "not selected for pi 1"
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
