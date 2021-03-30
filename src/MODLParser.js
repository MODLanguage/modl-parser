// Generated from /Users/tonywalmsley/work/num/grammar/antlr4/MODLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MODLParserListener = require('./MODLParserListener').MODLParserListener;
var MODLParserVisitor = require('./MODLParserVisitor').MODLParserVisitor;

var grammarFileName = "MODLParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010Q\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u0014\n\u0002",
    "\f\u0002\u000e\u0002\u0017\u000b\u0002\u0003\u0002\u0005\u0002\u001a",
    "\n\u0002\u0003\u0002\u0005\u0002\u001d\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003$\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004*\n\u0004\f\u0004\u000e",
    "\u0004-\u000b\u0004\u0005\u0004/\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u00057\n\u0005\f\u0005",
    "\u000e\u0005:\u000b\u0005\u0005\u0005<\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006G\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007M\n\u0007\u0003\b\u0003\b\u0003\b\u0002\u0002",
    "\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0004\u0003\u0002\u000f\u0010",
    "\u0004\u0002\u0004\u0006\u000e\u0010\u0002W\u0002\u001c\u0003\u0002",
    "\u0002\u0002\u0004#\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002",
    "\u0002\b2\u0003\u0002\u0002\u0002\nF\u0003\u0002\u0002\u0002\fL\u0003",
    "\u0002\u0002\u0002\u000eN\u0003\u0002\u0002\u0002\u0010\u0015\u0005",
    "\u0004\u0003\u0002\u0011\u0012\u0007\b\u0002\u0002\u0012\u0014\u0005",
    "\u0004\u0003\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0017\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003",
    "\u0002\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0018\u001a\u0007\b\u0002\u0002\u0019\u0018\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001d\u0003",
    "\u0002\u0002\u0002\u001b\u001d\u0005\u000e\b\u0002\u001c\u0010\u0003",
    "\u0002\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0007\u0002\u0002\u0003\u001f\u0003\u0003",
    "\u0002\u0002\u0002 $\u0005\u0006\u0004\u0002!$\u0005\b\u0005\u0002\"",
    "$\u0005\n\u0006\u0002# \u0003\u0002\u0002\u0002#!\u0003\u0002\u0002",
    "\u0002#\"\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%.\u0007",
    "\n\u0002\u0002&+\u0005\n\u0006\u0002\'(\u0007\b\u0002\u0002(*\u0005",
    "\n\u0006\u0002)\'\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002",
    "+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002",
    "\u0002-+\u0003\u0002\u0002\u0002.&\u0003\u0002\u0002\u0002./\u0003\u0002",
    "\u0002\u0002/0\u0003\u0002\u0002\u000201\u0007\u000b\u0002\u00021\u0007",
    "\u0003\u0002\u0002\u00022;\u0007\f\u0002\u000238\u0005\f\u0007\u0002",
    "45\u0007\b\u0002\u000257\u0005\f\u0007\u000264\u0003\u0002\u0002\u0002",
    "7:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;3\u0003\u0002",
    "\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0007",
    "\r\u0002\u0002>\t\u0003\u0002\u0002\u0002?@\t\u0002\u0002\u0002@A\u0007",
    "\u0007\u0002\u0002AG\u0005\f\u0007\u0002BC\u0007\u0010\u0002\u0002C",
    "G\u0005\u0006\u0004\u0002DE\u0007\u0010\u0002\u0002EG\u0005\b\u0005",
    "\u0002F?\u0003\u0002\u0002\u0002FB\u0003\u0002\u0002\u0002FD\u0003\u0002",
    "\u0002\u0002G\u000b\u0003\u0002\u0002\u0002HM\u0005\u0006\u0004\u0002",
    "IM\u0005\b\u0005\u0002JM\u0005\n\u0006\u0002KM\u0005\u000e\b\u0002L",
    "H\u0003\u0002\u0002\u0002LI\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002",
    "\u0002LK\u0003\u0002\u0002\u0002M\r\u0003\u0002\u0002\u0002NO\t\u0003",
    "\u0002\u0002O\u000f\u0003\u0002\u0002\u0002\f\u0015\u0019\u001c#+.8",
    ";FL"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'='", "';'", "','", 
                     "'('", "')'", "'['", "']'" ];

var symbolicNames = [ null, "WS", "NULL", "TRUE", "FALSE", "EQUALS", "STRUCT_SEP", 
                      "ARR_SEP", "LBRAC", "RBRAC", "LSBRAC", "RSBRAC", "NUMBER", 
                      "QUOTED", "STRING" ];

var ruleNames =  [ "modl", "modl_structure", "modl_map", "modl_array", "modl_pair", 
                   "modl_value", "modl_primitive" ];

function MODLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MODLParser.prototype = Object.create(antlr4.Parser.prototype);
MODLParser.prototype.constructor = MODLParser;

Object.defineProperty(MODLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MODLParser.EOF = antlr4.Token.EOF;
MODLParser.WS = 1;
MODLParser.NULL = 2;
MODLParser.TRUE = 3;
MODLParser.FALSE = 4;
MODLParser.EQUALS = 5;
MODLParser.STRUCT_SEP = 6;
MODLParser.ARR_SEP = 7;
MODLParser.LBRAC = 8;
MODLParser.RBRAC = 9;
MODLParser.LSBRAC = 10;
MODLParser.RSBRAC = 11;
MODLParser.NUMBER = 12;
MODLParser.QUOTED = 13;
MODLParser.STRING = 14;

MODLParser.RULE_modl = 0;
MODLParser.RULE_modl_structure = 1;
MODLParser.RULE_modl_map = 2;
MODLParser.RULE_modl_array = 3;
MODLParser.RULE_modl_pair = 4;
MODLParser.RULE_modl_value = 5;
MODLParser.RULE_modl_primitive = 6;


function ModlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl;
    return this;
}

ModlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModlContext.prototype.constructor = ModlContext;

ModlContext.prototype.EOF = function() {
    return this.getToken(MODLParser.EOF, 0);
};

ModlContext.prototype.modl_primitive = function() {
    return this.getTypedRuleContext(Modl_primitiveContext,0);
};

ModlContext.prototype.modl_structure = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_structureContext);
    } else {
        return this.getTypedRuleContext(Modl_structureContext,i);
    }
};

ModlContext.prototype.STRUCT_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
        return this.getToken(MODLParser.STRUCT_SEP, i);
    }
};


ModlContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl(this);
	}
};

ModlContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl(this);
	}
};

ModlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.ModlContext = ModlContext;

MODLParser.prototype.modl = function() {

    var localctx = new ModlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MODLParser.RULE_modl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 14;
            this.modl_structure();
            this.state = 19;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 15;
                    this.match(MODLParser.STRUCT_SEP);
                    this.state = 16;
                    this.modl_structure(); 
                }
                this.state = 21;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
            }

            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MODLParser.STRUCT_SEP) {
                this.state = 22;
                this.match(MODLParser.STRUCT_SEP);
            }

            break;

        case 2:
            this.state = 25;
            this.modl_primitive();
            break;

        }
        this.state = 28;
        this.match(MODLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_structureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_structure;
    return this;
}

Modl_structureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_structureContext.prototype.constructor = Modl_structureContext;

Modl_structureContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_structureContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_structureContext.prototype.modl_pair = function() {
    return this.getTypedRuleContext(Modl_pairContext,0);
};

Modl_structureContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_structure(this);
	}
};

Modl_structureContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_structure(this);
	}
};

Modl_structureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_structure(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_structureContext = Modl_structureContext;

MODLParser.prototype.modl_structure = function() {

    var localctx = new Modl_structureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MODLParser.RULE_modl_structure);
    try {
        this.state = 33;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MODLParser.LBRAC:
            this.enterOuterAlt(localctx, 1);
            this.state = 30;
            this.modl_map();
            break;
        case MODLParser.LSBRAC:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.modl_array();
            break;
        case MODLParser.QUOTED:
        case MODLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 32;
            this.modl_pair();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_mapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_map;
    return this;
}

Modl_mapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_mapContext.prototype.constructor = Modl_mapContext;

Modl_mapContext.prototype.LBRAC = function() {
    return this.getToken(MODLParser.LBRAC, 0);
};

Modl_mapContext.prototype.RBRAC = function() {
    return this.getToken(MODLParser.RBRAC, 0);
};

Modl_mapContext.prototype.modl_pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_pairContext);
    } else {
        return this.getTypedRuleContext(Modl_pairContext,i);
    }
};

Modl_mapContext.prototype.STRUCT_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
        return this.getToken(MODLParser.STRUCT_SEP, i);
    }
};


Modl_mapContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_map(this);
	}
};

Modl_mapContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_map(this);
	}
};

Modl_mapContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_map(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_mapContext = Modl_mapContext;

MODLParser.prototype.modl_map = function() {

    var localctx = new Modl_mapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MODLParser.RULE_modl_map);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(MODLParser.LBRAC);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MODLParser.QUOTED || _la===MODLParser.STRING) {
            this.state = 36;
            this.modl_pair();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MODLParser.STRUCT_SEP) {
                this.state = 37;
                this.match(MODLParser.STRUCT_SEP);
                this.state = 38;
                this.modl_pair();
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 46;
        this.match(MODLParser.RBRAC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_array;
    return this;
}

Modl_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_arrayContext.prototype.constructor = Modl_arrayContext;

Modl_arrayContext.prototype.LSBRAC = function() {
    return this.getToken(MODLParser.LSBRAC, 0);
};

Modl_arrayContext.prototype.RSBRAC = function() {
    return this.getToken(MODLParser.RSBRAC, 0);
};

Modl_arrayContext.prototype.modl_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Modl_valueContext);
    } else {
        return this.getTypedRuleContext(Modl_valueContext,i);
    }
};

Modl_arrayContext.prototype.STRUCT_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MODLParser.STRUCT_SEP);
    } else {
        return this.getToken(MODLParser.STRUCT_SEP, i);
    }
};


Modl_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_array(this);
	}
};

Modl_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_array(this);
	}
};

Modl_arrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_array(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_arrayContext = Modl_arrayContext;

MODLParser.prototype.modl_array = function() {

    var localctx = new Modl_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MODLParser.RULE_modl_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(MODLParser.LSBRAC);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MODLParser.NULL) | (1 << MODLParser.TRUE) | (1 << MODLParser.FALSE) | (1 << MODLParser.LBRAC) | (1 << MODLParser.LSBRAC) | (1 << MODLParser.NUMBER) | (1 << MODLParser.QUOTED) | (1 << MODLParser.STRING))) !== 0)) {
            this.state = 49;
            this.modl_value();
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MODLParser.STRUCT_SEP) {
                this.state = 50;
                this.match(MODLParser.STRUCT_SEP);
                this.state = 51;
                this.modl_value();
                this.state = 56;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 59;
        this.match(MODLParser.RSBRAC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_pairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_pair;
    return this;
}

Modl_pairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_pairContext.prototype.constructor = Modl_pairContext;

Modl_pairContext.prototype.EQUALS = function() {
    return this.getToken(MODLParser.EQUALS, 0);
};

Modl_pairContext.prototype.modl_value = function() {
    return this.getTypedRuleContext(Modl_valueContext,0);
};

Modl_pairContext.prototype.STRING = function() {
    return this.getToken(MODLParser.STRING, 0);
};

Modl_pairContext.prototype.QUOTED = function() {
    return this.getToken(MODLParser.QUOTED, 0);
};

Modl_pairContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_pairContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_pairContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_pair(this);
	}
};

Modl_pairContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_pair(this);
	}
};

Modl_pairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_pair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_pairContext = Modl_pairContext;

MODLParser.prototype.modl_pair = function() {

    var localctx = new Modl_pairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MODLParser.RULE_modl_pair);
    var _la = 0; // Token type
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 61;
            _la = this._input.LA(1);
            if(!(_la===MODLParser.QUOTED || _la===MODLParser.STRING)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 62;
            this.match(MODLParser.EQUALS);
            this.state = 63;
            this.modl_value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(MODLParser.STRING);
            this.state = 65;
            this.modl_map();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            this.match(MODLParser.STRING);
            this.state = 67;
            this.modl_array();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_value;
    return this;
}

Modl_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_valueContext.prototype.constructor = Modl_valueContext;

Modl_valueContext.prototype.modl_map = function() {
    return this.getTypedRuleContext(Modl_mapContext,0);
};

Modl_valueContext.prototype.modl_array = function() {
    return this.getTypedRuleContext(Modl_arrayContext,0);
};

Modl_valueContext.prototype.modl_pair = function() {
    return this.getTypedRuleContext(Modl_pairContext,0);
};

Modl_valueContext.prototype.modl_primitive = function() {
    return this.getTypedRuleContext(Modl_primitiveContext,0);
};

Modl_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_value(this);
	}
};

Modl_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_value(this);
	}
};

Modl_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_valueContext = Modl_valueContext;

MODLParser.prototype.modl_value = function() {

    var localctx = new Modl_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MODLParser.RULE_modl_value);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.modl_map();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.modl_array();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 72;
            this.modl_pair();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 73;
            this.modl_primitive();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Modl_primitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MODLParser.RULE_modl_primitive;
    return this;
}

Modl_primitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_primitiveContext.prototype.constructor = Modl_primitiveContext;

Modl_primitiveContext.prototype.QUOTED = function() {
    return this.getToken(MODLParser.QUOTED, 0);
};

Modl_primitiveContext.prototype.NUMBER = function() {
    return this.getToken(MODLParser.NUMBER, 0);
};

Modl_primitiveContext.prototype.STRING = function() {
    return this.getToken(MODLParser.STRING, 0);
};

Modl_primitiveContext.prototype.TRUE = function() {
    return this.getToken(MODLParser.TRUE, 0);
};

Modl_primitiveContext.prototype.FALSE = function() {
    return this.getToken(MODLParser.FALSE, 0);
};

Modl_primitiveContext.prototype.NULL = function() {
    return this.getToken(MODLParser.NULL, 0);
};

Modl_primitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.enterModl_primitive(this);
	}
};

Modl_primitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof MODLParserListener ) {
        listener.exitModl_primitive(this);
	}
};

Modl_primitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MODLParserVisitor ) {
        return visitor.visitModl_primitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MODLParser.Modl_primitiveContext = Modl_primitiveContext;

MODLParser.prototype.modl_primitive = function() {

    var localctx = new Modl_primitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MODLParser.RULE_modl_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MODLParser.NULL) | (1 << MODLParser.TRUE) | (1 << MODLParser.FALSE) | (1 << MODLParser.NUMBER) | (1 << MODLParser.QUOTED) | (1 << MODLParser.STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.MODLParser = MODLParser;
