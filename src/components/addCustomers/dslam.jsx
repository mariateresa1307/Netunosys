import React from "react"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import ContratoAdicionalDetail from "./contratoDetail"

const DslamStep = () => {

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Nodo
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>Bitstorm</MenuItem>
              <MenuItem value={20}>Huawei </MenuItem>
              <MenuItem value={20}>Malc </MenuItem>
              <MenuItem value={20}>Mx-160 </MenuItem>
              <MenuItem value={20}>Mxk-316 </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Vlan
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>1422</MenuItem>
              <MenuItem value={20}>2253 </MenuItem>
              <MenuItem value={20}>1688 </MenuItem>
              <MenuItem value={20}>3225 </MenuItem>
              <MenuItem value={20}>1888</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4} md={4} /*en la seccion del Dslam se agregara el numero de tarjeta*/>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Tarjeta
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2 </MenuItem>
              <MenuItem value={20}>3 </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4} /*en la seccion del Dslam se agregara el numero de puertos*/>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Puerto
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2 </MenuItem>
              <MenuItem value={20}>3 </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4} md={4} /*en la seccion del Dslam se agregara el numero de puertos*/>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Broadcast
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>256K</MenuItem>
              <MenuItem value={20}>512K</MenuItem>
              <MenuItem value={30}>1024K </MenuItem>
              <MenuItem value={40}>1536K </MenuItem>
              <MenuItem value={50}>2048K </MenuItem>
              <MenuItem value={60}>1MB/1MB </MenuItem>
              <MenuItem value={70}>1MB/2MB </MenuItem>
              <MenuItem value={80}>1MB/3MB </MenuItem>
              <MenuItem value={90}>1MB/4MB </MenuItem>
              <MenuItem value={100}>1MB/5MB </MenuItem>
              <MenuItem value={101}>1MB/6MB </MenuItem>
              <MenuItem value={102}>1MB/7MB </MenuItem>
              <MenuItem value={103}>1MB/8MB </MenuItem>
              <MenuItem value={104}>1MB/9MB </MenuItem>
              <MenuItem value={105}>1MB/10MB </MenuItem>
              <MenuItem value={106}>1MB/11MB </MenuItem>
              <MenuItem value={107}>1MB/12MB </MenuItem>
              <MenuItem value={108}>2MB/2MB</MenuItem>
              <MenuItem value={109}>3MB/3MB </MenuItem>
              <MenuItem value={110}>4MB/4MB </MenuItem>
              <MenuItem value={111}>5MB/5MB</MenuItem>
              <MenuItem value={112}>6MB/6MB</MenuItem>
              <MenuItem value={113}>7MB/7MB</MenuItem>
              <MenuItem value={114}>8MB/8MB</MenuItem>
              <MenuItem value={115}>9MB/9MB</MenuItem>
              <MenuItem value={116}>10MB/10MB</MenuItem>
              <MenuItem value={117}>11MB/11MB</MenuItem>
              <MenuItem value={118}>12MB/12MB</MenuItem>
              <MenuItem value={119}>15MB/15MB</MenuItem>
              <MenuItem value={120}>1xE1</MenuItem>
              <MenuItem value={121}>2xE1</MenuItem>
              <MenuItem value={122}>3xE1</MenuItem>
              <MenuItem value={123}>Ilimitado</MenuItem>
              <MenuItem value={124}>20MB/20MB </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4} md={4} /*en la seccion del Dslam se agregara el numero de puertos*/>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Servicio
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>Adsl</MenuItem>
              <MenuItem value={20}>Adsl2+ </MenuItem>
              <MenuItem value={20}>Datos </MenuItem>
              <MenuItem value={20}>Vdsl </MenuItem>
              <MenuItem value={20}>Telefonia </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Bloque IP
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>190.6.63.182</MenuItem>
              <MenuItem value={20}>190.6.63.185 </MenuItem>
              <MenuItem value={20}>190.6.63.186 </MenuItem>
              <MenuItem value={20}>190.6.63.187 </MenuItem>
              <MenuItem value={20}>190.6.63.188</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Ip Serial
            </InputLabel>

            <Select value={1} variant="filled">
              <MenuItem value={10}>190.6.63.182</MenuItem>
              <MenuItem value={20}>190.6.63.185 </MenuItem>
              <MenuItem value={20}>190.6.63.186 </MenuItem>
              <MenuItem value={20}>190.6.63.187 </MenuItem>
              <MenuItem value={20}>190.6.63.188</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FormControl fullWidth variant="filled">
            <InputLabel fullWidth id="3">
              Estado servicio
            </InputLabel>
            <Select value={1} variant="filled">
              <MenuItem value={10}>Conectado</MenuItem>
              <MenuItem value={20}>Desconectado-Soft </MenuItem>
              <MenuItem value={20}>Por Instalar </MenuItem>
              <MenuItem value={20}>Suspendido </MenuItem>
              <MenuItem value={20}>Desconectado-Hard </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField fullWidth id="filled-multiline-static" label="Informacion Adicional" multiline rows={4} defaultValue="" variant="filled" />
        </Grid>

        <Grid item xs={12}>
          <ContratoAdicionalDetail />
        </Grid>
      </Grid>
    </>
  )
}

export default DslamStep
