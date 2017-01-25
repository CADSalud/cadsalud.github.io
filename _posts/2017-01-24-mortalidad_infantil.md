---
layout: post
title:  "Mortalidad infantil y el subregistro administrativo"
date:   2017-01-24 
categories: nota técnica
tags: mortalidad infantil subregistro inegi
author: David Lampón
---
* content
{:toc}
Con el propósito de contar con indicadores estandarizados para ubicar el estado de salud de una población, la [Organización Mundial de la Salud](http://www.who.int/en/) publicó en 2015 su *Lista de Referencia Global de 100 Indicadores Básicos*.

<img src="/images-post/mort_inf_mundo.png" width="380">





Dichos indicadores funcionan para monitorear el estado de salud de una población, así como los factores de riesgo a los que están expuetos, cobertura de servicios y sistemas de salud. Uno de estos indicadores clave es la **Tasa de Mortalidad Infantil (Neonatal)** que se entiende como el número de defunciones de menores de un año por cada mil nacimientos vivos durante el primer año de su vida.

Los datos oficiales del INEGI reportan una **Tasa de Mortalidad Infantil (TMI)** para 2015 de **12.0** defunciones por cada 1000 nacidos vivos utilizando las Proyecciones de la Población de México 2010-2050 que proporciona CONAPO. La distribución por entidad federativa se observa en la siguiente gráfica:

<img src="/images-post/inegi_distr.png" width="580">

De acuerdo con CONAPO, la fuente utilizada por INEGI, el número de nacimientos proyectados para 2015 es de **2.2 millones** aproximadamente. En 2015 obtuvieron su acta de nacimiento **2.4 millones** de personas, de los cuales **1.6 millones** nacieron el mismo año en cualquiera de las 32 entidades federativas.

Tomando como referencia las proyecciones de CONAPO y las actas de nacimiento registradas, tan solo en 2015 no se registraron en el mismo año de nacimiento alrededor de **600 mil** niños. En 2015 se registran poco menos de **500 mil** niños que nacieron en 2014 como se observa en la siguiente gráfica:

<img src="/images-post/anio_nac.png" width="580">

El problema del subregistro administrativo de nacimientos y defunciones se puede inferir comparando la **TMI** reportada por INEGI (TMI\_oficial) y la **TMI** calculada (TMI\_calculada) a partir de las actas de nacimiento y de defunción. Utilizando la fórmula del total de defunciones (mediante actas de defunción) por cada 1000 nacimientos (mediante actas de nacimiento) en el mismo periodo y el mismo lugar (entidad federativa), se observan diferencias positivas (posible subregistro de defunciones) y diferencias negativas (posible subregistro de nacimientos), con el objeto de señalarlo y profundizar en su estudio. 

En la siguiente tabla se puede observar un par de ejemplos con dos entidades. En Nuevo León la TMI\_oficial es menor a la TMI\_calculada, lo cual se podría explicar por un subregistro de nacimientos o un sobreregistro de defunciones, esto último resultaría poco probable ante el sentido común. En contraste, en el estado de Hidalgo la TMI\_oficial es mayor a la TMI\_calculada, el subregistro estaría en las actas de defunción, o bien hay niños con más de un acta de nacimiento.

| Entidad       | Defunciones   | Nacimientos  | TMI\_oficial  | TMI\_calculada  |
| ------------- | -------------:| ------------:| -------------:| ---------------:|
| Nuevo León    |           855 |       76,023 |           8.8 |            11.2 |
| Hidalgo       |           436 |       38,185 |          13.0 |            11.4 |


La hipótesis de posibles subregistros en nacimientos o defunciones para todas las entidades federativas se muestra en la siguiente gráfica:

<img src="/images-post/subregistro.png" width="580">

Desde el punto de vista del diseño de políticas públicas, es importante el tratamiento de las bases de datos necesario para representar los fenómenos que requieren ser estudiados, como el derecho a la identidad para no permanecer anónimos en las demandas de la sociedad al Estado y a la misma sociedad ,o bien para monitorear los indicadores de desarrollo humano de las comunidades.

