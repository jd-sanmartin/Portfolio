import Head from "next/head";

import { useMediaQuery, useTheme } from "@mui/material";

import Grid from "@mui/material/Grid/Grid";

import { MapProvider } from "../utils/map/MapContext";

import SideMenu from "../components/map/SideMenu";
import MapContainer from "../components/map/MapContainer";
import HelpModal from "../components/map/HelpModal";

export default function Map() {
  const theme = useTheme();

	return (
		<>
			<Head>
				<title>Map</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MapProvider>
				<Grid container sx={{ height: 'calc(100vh - 70px)' }}>

          {
						useMediaQuery(theme.breakpoints.up("md")) &&
							(
								<Grid item md={3} sx={{ maxHeight: 'calc(100vh - 64px)' }}>
									<SideMenu />
								</Grid>
							)    
          }

					<Grid item xs={12} sm={12} md={9} height='100%'>
						<MapContainer />
					</Grid>

          <HelpModal />
				</Grid>
			</MapProvider>
		</>
	)
}
