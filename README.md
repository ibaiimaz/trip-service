# Trip Service

Aplikazio hau bidaiatzea gustatzen zaion jendearentzako sare sozial moduko bat da. Aplikazioaren ezaugarriak honakoak dira:
- Saioa hasi behar duzu edukia ikusi ahal izateko
- Beste erabiltzaile baten bidaiak ikusteko bere laguna izan behar duzu
- Ez bazaude logaturik, aplikazioak errore bat jaurtiko du

## Egin beharrekoa

- TripService klaserako testak idatzi behar dira %100 estaldura bat lortu arte
- Behin %100 estaldura dagoela, kodea birfaktorizatu behar da ahalik eta hobekien uzteko
- Birfaktorizazioa bukatutakoan, bai testek eta baita produkzio kodeak negozioaren erregelak argi eta garbi deskribatu behar dituzte


## Nola erabili

### Dependentziak instalatu

```bash
npm install
```

### Testak behin exekutatu

```bash
npm test
```

### Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki ber-exekutatu:

```bash
npm run test:watch
```

### Testak kode estaldurarekin exekutatu

```bash
npm run test:coverage
```

### Lintern erroreak egiaztatu

```bash
npm run lint
```

### Lintern erroreak zuzendu

```bash
npm run lint:fix
```

## Hook-ak
Proiektuak `pre-commit` hook bat dakar `commit` egiten den bakoitzean automatikoki testak exekutatu ditzan.

Hau ekidin nahi bada `--no-verify` erabil daiteke `commit` egiterakoan.
