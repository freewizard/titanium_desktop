describe("ti.Api tests",
{
	// test the logging functions
	test_logging_methods: function()
	{
		value_of(Titanium.API.critical).should_be_function();
		value_of(Titanium.API.debug).should_be_function();
		value_of(Titanium.API.error).should_be_function();
		value_of(Titanium.API.fatal).should_be_function();
		value_of(Titanium.API.log).should_be_function();
		value_of(Titanium.API.notice).should_be_function();
		value_of(Titanium.API.trace).should_be_function();
		value_of(Titanium.API.warn).should_be_function();

		Titanium.API.critical("this is a critical message");
        Titanium.API.debug("this is a debug message");
		Titanium.API.error("this is a error message");
		Titanium.API.fatal("this is a fatal message");

		Titanium.API.log(Titanium.API.CRITICAL,"this is a log message with severity Titanium.API.CRITICAL");
		Titanium.API.log(Titanium.API.DEBUG,"this is a log message with severity Titanium.API.DEBUG");
		Titanium.API.log(Titanium.API.ERROR,"this is a log message with severity Titanium.API.ERROR");
		Titanium.API.log(Titanium.API.FATAL,"this is a log message with severity Titanium.API.FATAL");
		Titanium.API.log(Titanium.API.INFO,"this is a log message with severity Titanium.API.INFO");
		Titanium.API.log(Titanium.API.NOTICE,"this is a log message with severity Titanium.API.NOTICE");
		Titanium.API.log(Titanium.API.TRACE,"this is a log message with severity Titanium.API.TRACE");
		Titanium.API.log(Titanium.API.WARN,"this is a log message with severity Titanium.API.WARN");

		Titanium.API.notice("this is a notice message");
		Titanium.API.trace("this is a trace message");
		Titanium.API.warn("this is a warn message");
	},
	validate_properties: function()
	{
		// get the platform and version.
		value_of(Titanium.platform).should_be_one_of(['win32','osx','linux']);
		value_of(Titanium.version).should_be_string();

		value_of(Titanium.API.APP_UPDATE).should_not_be_null();
		
        // test the objects in API		
        var app = Titanium.API.getApplication();
        
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();
		    value_of(app.getArgumentValue).should_be_function();
		    value_of(app.getArguments).should_be_function();
		    value_of(app.getAvailableComponents).should_be_function();
		    value_of(app.getAvailableModules).should_be_function();
		    value_of(app.getAvailableRuntimes).should_be_function();
		    value_of(app.getBundledComponents).should_be_function();    // done
		    value_of(app.getBundledModules).should_be_function();
		    value_of(app.getBundledRuntimes).should_be_function();
		    value_of(app.getComponents).should_be_function();           // done
		    value_of(app.getDataPath).should_be_function();
		    value_of(app.getDependencies).should_be_function();         // done
		    value_of(app.getExecutablePath).should_be_function();
		    value_of(app.getGUID).should_be_function();
		    value_of(app.getID).should_be_function();
		    value_of(app.getManifest).should_be_function();
		    value_of(app.getManifestPath).should_be_function();
		    value_of(app.getModules).should_be_function();
		    value_of(app.getName).should_be_function();
		    value_of(app.getPID).should_be_function();
		    value_of(app.getPath).should_be_function();
		    value_of(app.getResourcesPath).should_be_function();
		    value_of(app.getRuntime).should_be_function();
		    value_of(app.getVersion).should_be_function();
		    value_of(app.hasArgument).should_be_function();
		    value_of(app.isCurrent).should_be_function();
		    value_of(app.resolveDependencies).should_be_function();
        }		

		value_of(Titanium.API.CRITICAL).should_not_be_null();
		value_of(Titanium.API.DEBUG).should_not_be_null();
		value_of(Titanium.API.EQ).should_not_be_null();
		value_of(Titanium.API.ERROR).should_not_be_null();
		value_of(Titanium.API.FATAL).should_not_be_null();
		value_of(Titanium.API.GT).should_not_be_null();
		value_of(Titanium.API.GTE).should_not_be_null();
		value_of(Titanium.API.INFO).should_not_be_null();
		value_of(Titanium.API.LT).should_not_be_null();
		value_of(Titanium.API.LTE).should_not_be_null();
		value_of(Titanium.API.MOBILESDK).should_not_be_null();
		value_of(Titanium.API.NOTICE).should_not_be_null();
		value_of(Titanium.API.RUNTIME).should_not_be_null();
		value_of(Titanium.API.SDK).should_not_be_null();
		value_of(Titanium.API.TRACE).should_not_be_null();
		value_of(Titanium.API.UNKNOWN).should_not_be_null();
		value_of(Titanium.API.WARN).should_not_be_null();

		value_of(Titanium.API.createDependency).should_be_function();
		value_of(Titanium.API.critical).should_be_function();
		value_of(Titanium.API.debug).should_be_function();
		value_of(Titanium.API.error).should_be_function();
		value_of(Titanium.API.fatal).should_be_function();
		value_of(Titanium.API.fire).should_be_function();
		value_of(Titanium.API.get).should_be_function();
		value_of(Titanium.API.getApplication).should_be_function();             //done
		value_of(Titanium.API.getComponentSearchPaths).should_be_function();
		value_of(Titanium.API.getInstalledComponents).should_be_function();
		value_of(Titanium.API.getInstalledMobileSDKs).should_be_function();
		value_of(Titanium.API.getInstalledModules).should_be_function();
		value_of(Titanium.API.getInstalledRuntimes).should_be_function();
		value_of(Titanium.API.getInstalledSDKs).should_be_function();
		value_of(Titanium.API.info).should_be_function();
		value_of(Titanium.API.installDependencies).should_be_function();
		value_of(Titanium.API.log).should_be_function();
		value_of(Titanium.API.notice).should_be_function();
		value_of(Titanium.API.readApplicationManifest).should_be_function();
		value_of(Titanium.API.register).should_be_function();
		value_of(Titanium.API.set).should_be_function();
		value_of(Titanium.API.trace).should_be_function();
		value_of(Titanium.API.unregister).should_be_function();
		value_of(Titanium.API.warn).should_be_function();
	},
    // test the application components API
	test_components: function()
	{
        // test the objects in API		
        var app = Titanium.API.getApplication();
      
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();
            // get the components loaded by the application
            var loadedComponents = app.getComponents();
            var installedComponents = app.getAvailableComponents();
            var bundledComponents = app.getBundledComponents();
            
            
            value_of(loadedComponents).should_not_be_null();
            value_of(installedComponents).should_not_be_null();
            value_of(bundledComponents).should_not_be_null();

            if ( loadedComponents && installedComponents && bundledComponents ) {
                // check any components that are bundled with the app
                // first we verify that we have a list of components.
                for ( i =0; i < bundledComponents.length; i++ )
                {
                    var  item = bundledComponents[i];
                    // do we have a component?
                    value_of(item).should_not_be_null();
		            value_of(item).should_be_object();
		            if ( item ) 
		            {
		                value_of(item.getManifest).should_be_function();
		                value_of(item.getName).should_be_function();
		                value_of(item.getPath).should_be_function();
		                value_of(item.getType).should_be_function();
		                value_of(item.getVersion).should_be_function();
		                value_of(item.isBundled).should_be_function();
		                value_of(item.isLoaded).should_be_function();
		                
                        Titanium.API.info("processing bundled component '" + item.getName() + 
                                          "' type: '"+item.getType()+
                                          "' version: '"+item.getVersion()+"'");
		            }
                }
                
                // check the components that we think are installed
                // first we verify that we have a list of components.
                for ( i =0; i < installedComponents.length; i++ )
                {
                    var  item = installedComponents[i];
                    // do we have a component?
                    value_of(item).should_not_be_null();
		            value_of(item).should_be_object();
		            if ( item ) 
		            {
		                value_of(item.getManifest).should_be_function();
		                value_of(item.getName).should_be_function();
		                value_of(item.getPath).should_be_function();
		                value_of(item.getType).should_be_function();
		                value_of(item.getVersion).should_be_function();
		                value_of(item.isBundled).should_be_function();
		                value_of(item.isLoaded).should_be_function();
		                
                        Titanium.API.info("processing installed component '" + item.getName() + 
                                          "' type: '"+item.getType()+
                                          "' version: '"+item.getVersion()+"'");
		            }
                }
                
                // now validate the loaded components and verify 
                // that these components are supposed to be here.
                // these components should be part of the bundle or installed or both.
                for ( i =0; i < loadedComponents.length; i++ )
                {
                    var  item = loadedComponents[i];
                    // do we have a component?
                    value_of(item).should_not_be_null();
		            value_of(item).should_be_object();
		            if ( item ) 
		            {
		                value_of(item.getManifest).should_be_function();
		                value_of(item.getName).should_be_function();
		                value_of(item.getPath).should_be_function();
		                value_of(item.getType).should_be_function();
		                value_of(item.getVersion).should_be_function();
		                value_of(item.isBundled).should_be_function();
		                value_of(item.isLoaded).should_be_function();
    		            
		                // loaded components should always indicate so...
		                value_of(item.isLoaded()).should_be_true();

                        Titanium.API.info("processing loaded component '" + item.getName() + 
                                          "' type: '"+item.getType()+
                                          "' version: '"+item.getVersion()+"'");

                        var manifest = item.getManifest();
                        var name = item.getName();
                        var path = item.getPath();
                        var type = item.getType();
                        var version = item.getVersion();
    		            
		                // is this a valid component?  check against 
		                // the installed components.
		                if ( bundledComponents.length != 0) 
		                {
		                    for ( j=0; j< bundledComponents.length; j++)
		                    {
		                        var obj = bundledComponents[i];
		                        value_of(obj).should_be_object();
		                        if ( obj ) 
		                        {
		                            if ( name == obj.getName() && 
		                                 path == obj.getPath() && 
		                                 version == obj.getVersion() ) 
		                            {
		                                value_of(obj.isBundled()).should_be_true();
		                            }
		                        }
		                    }
    		            
		                }
		                else {
		                    // we have not detected any bundled components
		                    // all components should have this flag as FALSE
		                    value_of(item.isBundled()).should_be_false();
		                }
		                // is this a valid component?  check against 
		                // the installed components.
		                for ( j=0; j< installedComponents.length; j++){
		                    var obj = installedComponents[i];
	                        value_of(obj).should_be_object();
	                        if ( obj ) {
	                            if ( name == obj.getName() && 
	                                 path == obj.getPath() && 
	                                 version == obj.getVersion() ) {
	                                value_of(obj.isLoaded()).should_be_true();
	                                if ( !obj.isLoaded() )
	                                {
	                                    Titanium.API.error("obj " + obj.getName() + " is marked as not loaded");
	                                }
	                            }
	                        }
		                }
		            }
                }
            }
		}
	},
	// test the application dependancies API
	test_dependancies: function()
	{
        // test the objects in API		
        var app = Titanium.API.getApplication();
      
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();
		    var dependancies = app.getDependencies();
		    
            value_of(dependancies).should_not_be_null();
	        value_of(dependancies).should_be_object();
	        
		    // retrieve our list of depenancies.  can be NULL
		    if ( dependancies ) 
		    {
		        var components = app.getComponents();
		        
		        value_of(components).should_not_be_null();
		        if ( !components )
		        {
		            Titanium.API.error("failed to retrieve the loaded components list.");
		        }
		        else 
		        {
    		        value_of(components).should_be_object();
		        }
		            		    
    		    for (i=0; i<dependancies.length; i++ )
    		    {
    		        var dependancy = dependancies[i];
    		        
                    value_of(dependancy).should_not_be_null();
	            
    		        if( dependancy )
    		        {
		                value_of(dependancy).should_be_object();
		                value_of(dependancy.getName).should_be_function();
		                value_of(dependancy.getType).should_be_function();
		                value_of(dependancy.getVersion).should_be_function();
		                
                        Titanium.API.info("processing dependancy '" + dependancy.getName() + 
                                          "' type: '"+dependancy.getType()+
                                          "' version: '"+dependancy.getVersion()+"'");
		                if (components)
		                {
		                    // now that we have an object, check against the components list
		                    // each dependancy should be matched to a loaded component.
		                    for (j=0; j<components.length; j++ )
		                    {
    		                    var obj = components[j];
    		                    if ( obj )
    		                    {
    		                        value_of(obj).should_be_object();
    		                        
    		                        var name = obj.getName();
    		                        var type = obj.getType();
    		                        var version = obj.getVersion();
    		                        
    		                        value_of(name).should_not_be_null();
    		                        value_of(type).should_not_be_null();
    		                        value_of(version).should_not_be_null();
    		                        
		                            var bName = (name == dependancy.getName())?true:false;
		                            var bType = (type == dependancy.getType())?true:false;;
		                            var bVersion = (version == dependancy.getVersion())?true:false;;
		                            
		                            if ( bName && bType && bVersion)
		                            {
		                                Titanium.API.trace("match dependancy "+name+" to component");
		                                break;
		                            }
		                            
		                            // don't spam the log file
		                            if ( !bName || !bType || !bVersion)
		                            {
                                        Titanium.API.trace("match dependancy "+name+" to component");
		                            }
		                        }
		                    }
		                }
    		        }
    		    }		
		    }
		    else
		    {
		        Titanium.API.warn("no dependancies detected");
		    }
		}
		// create a dependancy  what does this mean?  what are we trying to accomplish?
	    var dep = Titanium.API.createDependency(Titanium.API.RUNTIME, "test", "0.0.1", Titanium.API.EQ);
	    // TODO - how to create and manage a dependancy
	},
	// test the runtime component functions
	test_installed_runtime: function()
	{
        // test the objects in API		
        var app = Titanium.API.getApplication();
      
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();

            // every module, runtime object and SDK should have a component entry	    
	        var components = app.getComponents();
	        
	        if ( !components )
	        {
	            Titanium.API.error("failed to retrieve the loaded components list.");

                // fail the test if we don't retrieve the list
                value_of(components).should_not_be_null();
            }
	        else 
	        {
		        value_of(components).should_be_object();
		        value_of(components.length).should_not_be(0);
	            var runtime = app.getRuntime();
    	        
	            // this should just be a component in the components list.
	            if ( runtime )
	            {
	                var bFound = false;
	                value_of(runtime).should_be_object();
	                
                    Titanium.API.info("testing runtime component '" + runtime.getName() + 
                                      "' type: '"+runtime.getType()+
                                      "' version: '"+runtime.getVersion()+"'");
                                      
	                for ( i=0; i<components.length; i++ )
	                {
                        Titanium.API.info("processing component '" + components[i].getName() + 
                                          "' type: '"+components[i].getType()+
                                          "' version: '"+components[i].getVersion()+"'");
                                          
	                    if ( runtime.getName() == components[i].getName() &&
                             runtime.getType() == components[i].getType() &&
                             runtime.getVersion() == components[i].getVersion())
                        {
                            Titanium.API.info("match runtime '" + runtime.getName() + "' to component entry");
                            bFound = true;
                            break;
                        }
	                }
	                
                    if ( !bFound )
                    {
                        Titanium.API.error("failed to match runtime object '" + runtime.getName() + "' to list of loaded components");
	                    value_of(bFound).should_be_true();
                    }


                    Titanium.API.info("checking availableRuntimes[] ");
                    // we have now established that the runtime is valid.  
                    // check the available runtime list
		            var availableRuntimes = app.getAvailableRuntimes();
		            if ( availableRuntimes )
		            {
		                value_of(availableRuntimes).should_be_object();
		                bFound = false;
		                
		                value_of(availableRuntimes.length ).should_not_be(0);
		                Titanium.API.info("availableRuntimes.length = "+availableRuntimes.length);

	                    for ( i=0; i<availableRuntimes.length; i++ )
	                    {
                            Titanium.API.info("processing available runtime component '" + availableRuntimes[i].getName() + 
                                              "' type: '"+availableRuntimes[i].getType()+
                                              "' version: '"+availableRuntimes[i].getVersion()+"'");

	                        if ( runtime.getName() == availableRuntimes[i].getName() &&
                                 runtime.getType() == availableRuntimes[i].getType() &&
                                 runtime.getVersion() == availableRuntimes[i].getVersion())
                            {
                                Titanium.API.info("match runtime '" + runtime.getName() + "' to available Runtimes entry");
                                bFound = true;
                                break;
                            }
	                    }
	                    if ( !bFound )
	                    {
	                        // fail the test if we don't find a value.	                    
	                        Titanium.API.error("failed to match runtime object '" + runtime.getName() + "' to list of available runtime objects");
	                        value_of(bFound).should_be_true();
	                    }
		            }
		            else
		            {
		                Titanium.API.fatal("failed to retrieve the available runtime module list");
                        // fail the test if we don't retrieve the list
                        value_of(aviavailableRuntimes).should_not_be_null();
		            }
    		        
                    Titanium.API.info("checking bundledRuntimes[] ");
			        var bundledRuntimes = app.getBundledRuntimes();
		            if ( bundledRuntimes )
		            {
		                value_of(bundledRuntimes).should_be_object();
		                value_of(bundledRuntimes.length).should_not_be(0);
		                Titanium.API.info("bundledRuntimes.length = "+bundledRuntimes.length);
		                
		                bFound = false;
	                    for ( i=0; i<bundledRuntimes.length; i++ )
	                    {
                            Titanium.API.info("processing bundled runtime component '" + bundledRuntimes[i].getName() + 
                                              "' type: '"+bundledRuntimes[i].getType()+
                                              "' version: '"+bundledRuntimes[i].getVersion()+"'");
	                        if ( runtime.getName() == bundledRuntimes[i].getName() &&
                                 runtime.getType() == bundledRuntimes[i].getType() &&
                                 runtime.getVersion() == bundledRuntimes[i].getVersion())
                            {
                                Titanium.API.info("match runtime '" + runtime.getName() + "' to bundled Runtimes entry");
                                bFound = true;
                                break;
                            }
	                    }
                        if ( !bFound )
	                    {
	                        // fail the test if we don't find a value.	                    
	                        Titanium.API.error("failed to match runtime object '" + runtime.getName() + "' to list of bundled runtime objects");
	                        value_of(bFound).should_be_true();
	                    }
		            }
		            else
		            {
		                Titanium.API.warn("failed to retrieve the bundled runtime module list");
                        // fail the test if we don't retrieve the list
                        value_of(bundledRuntimes).should_not_be_null();
		            }
	            }
	            else 
	            {
	                Titanium.API.fatal("failed to retrieve the runtime component");
                    // fail the test if we don't retrieve the list
                    value_of(runtime).should_not_be_null();
	            }
	        }
		}
	},
	// test the runtime component functions
	test_installed_modules: function()
	{
        // test the objects in API		
        var app = Titanium.API.getApplication();
      
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();

            // every module, runtime object and SDK should have a component entry	    
	        var components = app.getComponents();
	        
            value_of(components).should_not_be_null();

	        if ( !components )
	        {
	            Titanium.API.error("failed to retrieve the loaded components list.");
	        }
	        else 
	        {
		        value_of(components).should_be_object();
	        }
	        
		    var modules = app.getModules();

            value_of(modules).should_not_be_null();
		    if ( modules )
		    {
		        value_of(modules).should_be_object();
                var bFound = false;
                for (j=0; j<modules.length; j++ )
                {
                    var module = modules[j];
                    
                    value_of(module).should_not_be_null();
                    if (!module)
                    {
                        Titanium.API.error("failed to retrieve module from modules["+j+"]");
                    }
                    else 
                    {
                        bFound = false;
                        Titanium.API.info("processing module '" + module.getName() + 
                                          "' type: '"+module.getType()+
                                          "' version: '"+module.getVersion()+"'");

                        for ( i=0; i<components.length; i++ )
                        {
                            if ( module.getName() == components[i].getName() &&
                                 module.getType() == components[i].getType() &&
                                 module.getVersion() == components[i].getVersion())
                            {
                                Titanium.API.trace("match module "+module.getName() +" to component entry");
                                bFound = true;
                                break;
                            }
                        }

                        if ( !bFound )
                        {
                            // fail the test if we don't find a value.	                    
                            Titanium.API.fatal("failed to match modules object to list of loaded components");
                            value_of(bFound).should_be_true();
                        }
                    }
                }
		        
                Titanium.API.info("checking bundledModules[] ");
		        var bundledModules = app.getBundledModules();

                value_of(bundledModules).should_not_be_null();
      		    if ( bundledModules )
		        {
		            value_of(bundledModules).should_be_object();
                    var bFound = false;
                    for (j=0; j<modules.length; j++ )
                    {
                        var module = modules[j];
                        
                        Titanium.API.info("processing module '" + module.getName() + 
                                          "' type: '"+module.getType()+
                                          "' version: '"+module.getVersion()+"'");

                        for ( i=0; i<bundledModules.length; i++ )
                        {
                            var m = bundledModules[i];
                            value_of(m).should_not_be_null();
                            
                            Titanium.API.info("processing bundled module component '" + m.getName() + 
                                              "' type: '"+m.getType()+
                                              "' version: '"+m.getVersion()+"'");

                            if ( module.getName() == m.getName() &&
                                 module.getType() == m.getType() &&
                                 module.getVersion() == m.getVersion())
                            {
                                Titanium.API.trace("match bundled module "+module.getName() +" to modules entry");
                                bFound = true;
                                break;
                            }
                        }
                    }
                }

                Titanium.API.info("checking availableModules[] ");
		        var availableModules = app.getAvailableModules();
                value_of(availableModules).should_not_be_null();
                
      		    if ( availableModules )
		        {
		            value_of(availableModules).should_be_object();
                    var bFound = false;
                    for (j=0; j<modules.length; j++ )
                    {
                        var module = modules[j];
                        
                        Titanium.API.info("processing module component '" + module.getName() + 
                                          "' type: '"+module.getType()+
                                          "' version: '"+module.getVersion()+"'");

                        for ( i=0; i<availableModules.length; i++ )
                        {
                            var m = availableModules[i];
                            value_of(m).should_not_be_null();
                            
                            Titanium.API.info("processing available module component '" + m.getName() + 
                                              "' type: '"+m.getType()+
                                              "' version: '"+m.getVersion()+"'");

                            if ( module.getName() == m.getName() &&
                                 module.getType() == m.getType() &&
                                 module.getVersion() == m.getVersion())
                            {
                                Titanium.API.trace("match avialable module "+module.getName() +" to modules entry");
                                bFound = true;
                                break;
                            }
                        }
                        if ( !bFound )
                        {
                            // fail the test if we don't find a value.	                    
                            value_of(bFound).should_be_true();
                            Titanium.API.fatal("failed to match module "+module.getName() +" to list of available modules");
                        }
                    }
                }
		    }
		    else 
		    {
		        Titanium.API.fatal("Failed to retrieve the list of modules.");
		    }
		}
	},
	// test the runtime component functions
	test_api_sdk: function()
	{
        // test the objects in API		
        var app = Titanium.API.getApplication();
      
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();

            // every module, runtime object and SDK should have a component entry	    
	        var components = app.getComponents();
	        
	        if ( !components )
	        {
	            Titanium.API.error("failed to retrieve the loaded components list.");
	        }
	        else 
	        {
		        value_of(components).should_be_object();
	        }
	        
	        // once we have the list of components from the application 
	        // object, we need to  verify that the lists are the same 
	        // that we get through the application object.

            Titanium.API.info("checking installed SDKs[] ");
	        
		    var sdks = Titanium.API.getInstalledSDKs();

            value_of(sdks).should_not_be_null();
		    
		    if ( sdks )
		    {
		        value_of(sdks).should_be_object();
                var bFound = false;
                for (j=0; j<sdks.length; j++ )
                {
                    var module = sdks[j];
                    Titanium.API.info("processing SDK component '" + module.getName() + 
                                      "' type: '"+module.getType()+
                                      "' version: '"+module.getVersion()+"'");
                    
                    
                    for ( i=0; i<components.length; i++ )
                    {
                        var am = components[i];
                        value_of(am).should_not_be_null();
                        
                        Titanium.API.info("processing component '" + am.getName() + 
                                          "' type: '"+am.getType()+
                                          "' version: '"+am.getVersion()+"'");

                        if ( module.getName() == am.getName() &&
                             module.getType() == am.getType() &&
                             module.getVersion() == am.getVersion())
                        {
                            Titanium.API.trace("match SDK  "+module.getName() +" to component entry");
                            bFound = true;
                            break;
                        }
                    }
                }
                
                if ( !bFound )
                {
                    // fail the test if we don't find a value.	                    
                    Titanium.API.fatal("failed to match SDK object to list of loaded components");
                    // this is not a real bug.  this is only meant for developer environments.
//                    value_of(bFound).should_be_true();
                }
		    }
		    else 
		    {
		        Titanium.API.fatal("Failed to retrieve the list of SDKs.");
		    }
                
	        var mobileSDKs = Titanium.API.getInstalledMobileSDKs();
  		    if ( mobileSDKs )
	        {
	            value_of(mobileSDKs).should_be_object();
                var bFound = false;
                for (j=0; j<mobileSDKs.length; j++ )
                {
                    var module = mobileSDKs[j];
                    Titanium.API.info("processing mobile SDK module '" + module.getName() + 
                                      "' type: '"+module.getType()+
                                      "' version: '"+module.getVersion()+"'");
                    
                    for ( i=0; i<components.length; i++ )
                    {
                        if ( module.getName() == components[i].getName() &&
                             module.getType() == components[i].getType() &&
                             module.getVersion() == components[i].getVersion())
                        {
                            Titanium.API.trace("match avialable mobile SDK  "+module.getName() +" to components entry");
                            bFound = true;
                            break;
                        }
                    }
                    
                    if ( !bFound )
                    {
                        // don't fail the test if we don't find a value.  this is really just for titanium development.
                        Titanium.API.warn("failed to match mobile SDK object to list of loaded components");
                        // this is not a real bug.  this is only meant for developer environments.
//                        value_of(bFound).should_be_true();
                    }
                }
            }
		}
	},

	// test the runtime component functions
	test_api_module: function()
	{
        // test the objects in API		
        var app = Titanium.API.getApplication();
      
        value_of(app).should_not_be_null();
        if ( app ) 
        {
		    value_of(app).should_be_object();
		    
		    
		    var argv = app.getArguments();
		    
		    if ( argv )
		    {
		        value_of(argv).should_be_object();
		    }
		    
            var pid = app.getPID();
            
            // isCurrent is true when we are the currently running app
		    if (app.isCurrent())
		    {
		        // the PID should not be null when we are the current app
		        value_of(pid).should_not_be_null();
		        Titanium.API.info("Application PID = "+pid);
		    }
		    else
		    {
		        // the pid should be null when we are not the current running app.		        
		        // I don't think we should ever get here in the unit test since 
		        // we should always be the current app.
		        value_of(pid).should_be_null();
		    }
		    
		    // TODO  test events  what kind of events happen here?
		    
		    // TODO test global attributes  what are they?
		    
		    
		}
		
	    var componentSearchPaths = Titanium.API.getComponentSearchPaths();
	    
	    value_of(componentSearchPaths).should_be_object();
	    value_of(componentSearchPaths.length).should_not_be(0);
	    
	    
        Titanium.API.info("dump component search paths")
	    for (i=0; i<componentSearchPaths.length; i++)
	    {
	        Titanium.API.info(componentSearchPaths[i]);
	    }
		
	},
});
