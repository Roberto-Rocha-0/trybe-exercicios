# DIA 1

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Unix & Bash. Para isso deveria criar arquivos e diretórios.

Os requisitos do exercício parte 1 são:

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

2. Crie um arquivo de texto com o nome trybe.txt .

3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .

4. Renomeie o arquivo trybe.txt .

5. Dentro de unix_tests , crie um novo diretório chamado backup .

6. Mova o arquivo trybe_backup.txt para o diretório backup .

7. Dentro de unix_tests , crie um novo diretório chamado backup2 .

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .

9. Apague a pasta backup .

10. Renomeie a pasta backup2 para backup .

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

12. Apague o diretório backup .

13. Limpe o terminal.

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt :

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL


14. Mostre na tela as 5 primeiras skills do arquivo skills.txt .

15. Mostre na tela as 4 últimas skills do arquivo skills.txt .

16. Apague todos os arquivos que terminem em .txt .



O objetivo desses exercicios era fixar o aprendizado sobre Manipulação & Busca.

Os requisitos do exercício parte 2 são:

1. Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:


curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"


2. Mostre todo o conteúdo do arquivo countries.txt na tela.

3. Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .

4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .

5. Busque por Brazil no countries.txt .

6. Busque novamente por brazil , mas agora utilizando o lower case .

Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.


7. Busque pelas frases que não contenham a palavra fox .

8. Conte o número de palavras do arquivo phrases.txt .

9. Conte o número de linhas do arquivo phrases.txt .

10. Crie os arquivos empty.tbt e empty.pdf .

11. Liste todos os arquivos do diretório unix_tests .

12. Liste todos os arquivos que terminem com txt .

13. Liste todos os arquivos que terminem com tbt ou txt .

14. Acesse o manual do comando ls .

# Comandos Utilizados no dia:
```
595  mkdir unix_tests
596  ls
597  cd unix_tests
598  cat trybe.txt
599  touch trybe.txt
600  ls
601  touch trybe_backup.txt
602  cat trybe.txt trybe_original.txt
603  mv trybe.txt trybe_original.txt
604  ls
605  mkdir backup
606  ls
607  mv trybe_backup.txt backup
608  ls
609  mkdir backup2
610  ls
611  cd backup
612  ls
613  mv trybe_backup.txt ..
614  ls
615  cd ..
616  ls
617  mv trybe_backup.txt backup2
618  ls
619  rmdir backup
620  mv backup2 backup
621  ls
622  pwd
623  rmdir -f backup
624  rm -rf backup
625  ls
642  \ncurl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
643  cat countries.txt
644  grep -i 'Zambia' countries.txt
645  less countries.txt
646  less grep countries.txt
647  cat > phrases.txt
648  grep -iv 'fox' phrases.txt
649  wc -w phrases.txt
650  wc -l phrases.txt
651  touch empty.tbt
652  touch empty.pdf
653  ls
654  ls *.txt
655  ls *.txt *.tbt
656  man ls
```
