# Typescript REST API
## Technology
The used technology	will be NodeJS with typescript, i would like to learn a little bit more about typescript and its ecosystem so i use this test as an excuse to try out this technology, no specific technical reasons. To storing data i’ll use a RDBMS mainly due the transactional nature of the data model plus the fact that the domain itself (money) lead me to sacrifice performance over data consistency.  

1. NodeJS + Typescript
2. MySQL

## Missing
1. I’m aware of the fact that all the APIs of `BalanceController` should run only under authentication, but i didn’t have the time to implement so. 
2. Tests. I got short on time, i’ll try to implement them today eventually. At least of the services.
3. Using generics to avoid code repetition, i try this approach but a typescript bug with PartialGenerics let me waste a lot of time until, after 3 hours of workarounds, i finally opt for the code repetition. The refactor should be easy once the the bug is fixed. (ref in the code)
4. Project strcture. I probably should move the source of the app into a sub directory, to make it cleaner. I realize it late, i'll try to move it without messsing to much up.
5. Missing linter, i should add at least a basic linter for ts, but the fact that vscode already use one built in, makes me forget about it. I'll do eventually today.


## Design considerations

1. I don't really like the relation One2One that i have between User and Balance, i should probably normalize it placing an abstract entity in the middle.



